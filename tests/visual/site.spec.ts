import { expect, test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const base = "/demo-vite-vocs";

// One page per GraphQL type kind: [kind, path, H1 text].
const pages = [
  ["object", "types/objects/project", "Project"],
  ["enum", "types/enums/project-status", "ProjectStatus"],
  ["interface", "types/interfaces/node", "Node"],
  ["union", "types/unions/search-result", "SearchResult"],
  ["input", "types/inputs/create-project-input", "CreateProjectInput"],
  ["scalar", "types/scalars/date-time", "DateTime"],
  ["query", "operations/queries/projects", "projects"],
  ["mutation", "operations/mutations/create-project", "createProject"],
  ["subscription", "operations/subscriptions/project-changed", "projectChanged"],
  ["directive", "types/directives/deprecated", "deprecated"],
] as const;

// Element screenshots are stitched while scrolling, so sticky chrome would be
// painted over the content. Hide it for those shots.
const hideChrome = [
  "header, footer, nav, [data-v-sidebar-container] { display: none !important; }",
  "main > footer, #vocs-content ~ * { display: none !important; }",
  "[data-v-ask-ai-container] { display: none !important; }",
].join("\n");

const hideAskAi = "[data-v-ask-ai-container] { display: none !important; }";

const content = (page: import("@playwright/test").Page) =>
  page.locator("#vocs-content article");

test("home", async ({ page }) => {
  const response = await page.goto(`${base}/`);
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { name: "Your API, mapped with intent." }),
  ).toBeVisible();
  await argosScreenshot(page, "home", { argosCSS: hideAskAi });
});

for (const [kind, path, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(`${base}/${path}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toContainText(title);
    await argosScreenshot(page, `page-${kind}`, {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
}

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto(`${base}/`);
    await argosScreenshot(page, "home-dark", { argosCSS: hideAskAi });
  });

  test("page: object", async ({ page }) => {
    await page.goto(`${base}/types/objects/project`);
    await argosScreenshot(page, "page-object-dark", {
      element: content(page),
      argosCSS: hideChrome,
    });
  });
});
