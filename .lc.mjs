// usage: node linkcheck.mjs <startUrl> [prodPrefix=localPrefix ...]
// Crawls same-origin HTML pages from startUrl (with a headless browser, so
// client-rendered sites like Docsify work), checks every link (internal pages,
// assets, `.md` copies, `#anchors` on the same page) and prints broken ones.
// `prodPrefix=localPrefix` maps absolute production URLs to the local server.
import { chromium } from "@playwright/test";

const [, , start, ...maps] = process.argv;
const mapping = maps.map((m) => m.split("="));
const origin = new URL(start).origin;
const toLocal = (u) => {
  for (const [p, l] of mapping) if (u.startsWith(p)) return l + u.slice(p.length);
  return u;
};
const strip = (u) => {
  const x = new URL(u);
  x.hash = x.hash.startsWith("#/") ? x.hash : "";
  return x.href;
};

const b = await chromium.launch();
const ctx = await b.newContext();
const page = await ctx.newPage();
const seen = new Set();
const queue = [start];
const checked = new Map();
const broken = [];
const missingAnchors = [];

const status = async (u) => {
  if (!checked.has(u)) {
    const r = await ctx.request.get(u, { maxRedirects: 5 }).catch(() => null);
    checked.set(u, r ? r.status() : 0);
  }
  return checked.get(u);
};

while (queue.length && seen.size < 400) {
  const url = queue.shift();
  if (seen.has(url)) continue;
  seen.add(url);
  const res = await page.goto(url, { waitUntil: "networkidle" }).catch(() => null);
  if (url.includes("#/")) {
    // Hash routes are rendered client-side: same-document navigations have no
    // response, so check the rendered content instead (Docsify shows "404").
    await page.waitForTimeout(500);
    const notFound = await page.evaluate(() =>
      /^\s*404\b/.test(document.querySelector(".markdown-section, main, article")?.textContent ?? ""),
    );
    if (notFound) {
      broken.push(["(route)", url, 404]);
      continue;
    }
  } else if (!res || res.status() >= 400) {
    broken.push(["(page)", url, res?.status() ?? 0]);
    continue;
  }
  const { links, ids } = await page.evaluate(() => ({
    links: [...document.querySelectorAll("a[href]")].map((a) => a.href),
    ids: [...document.querySelectorAll("[id],[name]")].map((e) => e.id || e.getAttribute("name")),
  }));
  for (const raw of links) {
    if (!/^https?:/.test(raw)) continue;
    const href = toLocal(raw);
    const u = new URL(href);
    if (u.origin !== origin) continue;
    const here = new URL(url);
    if (u.hash && !u.hash.startsWith("#/") && u.pathname === here.pathname && u.search === here.search) {
      const id = decodeURIComponent(u.hash.slice(1));
      if (id && !ids.includes(id)) missingAnchors.push([url, u.hash]);
      continue;
    }
    if (u.hash.startsWith("#/")) {
      if (!seen.has(href)) queue.push(href);
      continue;
    }
    const target = strip(href);
    const s = await status(target);
    if (s >= 400 || s === 0) broken.push([url, raw, s]);
    else if (!/\.[a-z0-9]{1,5}$/i.test(u.pathname) || /\.html?$/.test(u.pathname)) {
      if (!seen.has(target)) queue.push(target);
    }
  }
}
await b.close();
const uniq = (a) => [...new Map(a.map((x) => [x.join(" "), x])).values()];
console.log(`pages crawled: ${seen.size}, links checked: ${checked.size}`);
for (const [from, to, s] of uniq(broken).slice(0, 100000)) console.log(`BROKEN ${s} ${to}  (on ${from})`);
for (const [from, h] of uniq(missingAnchors).slice(0, 20)) console.log(`ANCHOR ${h}  (on ${from})`);
console.log(`broken: ${uniq(broken).length}, missing anchors: ${uniq(missingAnchors).length}`);
