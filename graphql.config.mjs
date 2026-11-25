import {
  directiveOccurrence,
  hasDirectiveNamed,
} from "@graphql-markdown/graphql";

const SCHEMA =
  "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql";
const local = (path) => new URL(path, import.meta.url).href;

const loaders = {
  UrlLoader: {
    module: "@graphql-tools/url-loader",
  },
};
const printTypeOptions = {
  typeBadges: true,
};
const decorators = {
  // Mirrors the built-in `@deprecated` treatment (badge + callout) for the
  // type-level `@deprecatedType` directive, which the spec doesn't allow
  // `@deprecated` to target.
  deprecatedTypeTag: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "tags" },
    render: (_values, options) =>
      options.formatMDXBadge({ text: "deprecated" }),
  },
  deprecatedTypeNotice: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "description" },
    resolve: directiveOccurrence("deprecatedType"),
    render: ([value], options) =>
      options.formatMDXAdmonition(
        // Vocs directives (`:::warning`) need blank lines around their content.
        {
          text: `\n\n${value.reason}\n\n`,
          title: "Deprecated",
          type: "warning",
        },
        options.meta,
      ),
  },
};

export default {
  projects: {
    default: {
      schema: SCHEMA,
      extensions: {
        ["graphql-markdown"]: {
          rootPath: "./docs/pages",
          baseURL: ".",
          linkRoot: "/",
          loaders,
          printTypeOptions,
          decorators,
          docOptions: {
            frontMatter: {
              showOutline: false,
              showAskAi: false,
              content: {
                width: "100%",
              },
            },
            sectionHeaderId: false,
          },
          formatter: local("./lib/formatter.mjs"),
          homepage: "./assets/index.mdx",
          telemetry: false,
        },
      },
    },
    markdown: {
      schema: SCHEMA,
      extensions: {
        ["graphql-markdown"]: {
          // Same content settings as the pages
          loaders,
          printTypeOptions,
          decorators,
          // A folder used only for the copies
          rootPath: "./.markdown-copies",
          // Same as the pages, so a copy has the path of its page
          baseURL: ".",
          formatter: local("./lib/markdown-copy.mjs"),
          homepage: false,
          docOptions: { sectionHeaderId: false },
          telemetry: false,
          force: true,
        },
      },
    },
  },
};
