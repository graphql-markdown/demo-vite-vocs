export default {
    schema:
      "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql",
    extensions: {
      ["graphql-markdown"]: {
        rootPath: "./docs/pages",
        baseURL: ".",
        linkRoot: "/",
        loaders: {
          UrlLoader: {
            module: "@graphql-tools/url-loader",
          },
        },
        printTypeOptions: {
          typeBadges: true,
        },
        docOptions: {
            frontMatter: {
                showOutline: false,
                showAskAi: false,
                content: {
                    width: "100%"
                }
            },
            sectionHeaderId: false,
        },
        formatter: "@graphql-markdown/formatters/vocs",
        homepage: "./assets/index.mdx",
        telemetry: false,
      },
    },
  };
