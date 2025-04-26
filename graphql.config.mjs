export default {
    schema: "https://graphql.anilist.co/",
    extensions: {
      ["graphql-markdown"]: {
        rootPath: "./docs/pages",
        baseURL: ".",
        linkRoot: "/",
        loaders: {
          UrlLoader: {
            module: "@graphql-tools/url-loader",
            options: { method: "POST" },
          },
        },
        printTypeOptions: {
          typeBadges: true,
        },
        docOptions: {
            frontMatter: {
                showOutline: false,
                content: {
                    width: "100%"
                }
            }
        },
        mdxParser: `${__dirname}/lib/vocs-mdx.cjs`,
        homepage: `${__dirname}/assets/index.mdx`,
      },
    },
  };
