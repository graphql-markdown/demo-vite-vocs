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
