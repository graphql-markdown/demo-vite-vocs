# GraphQL-Markdown + Vite/Vocs demo

[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/graphql-markdown/demo-vite-vocs/tree/main)

**Live demo:** [graphql-markdown.dev/demo-vite-vocs](https://graphql-markdown.dev/demo-vite-vocs/)

## 🚀 Project Structure

Inside your GraphQL-Markdown + [Vite](https://https://vite.dev/)/[Vocs](https://vocs.dev/) project, you'll see the following folders and files:

```
.
├── assets/
│   └── index.mdx
├── docs/
│   ├── pages/
│   └── styles.css
├── lib/
│   ├── vocs-mdx.cjs
│   └── sidebar.ts
├── vocs.config.ts
├── graphql.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                              |
| :------------------------- | :-------------------------------------------------- |
| `npm install`              | Installs dependencies                               |
| `npx gqlmd graphql-to-doc` | Generate documentation from GraphQL schema          |
| `npm run doc`              | Alias of `npx gqlmd graphql-to-doc`                 |
| `npm run dev`              | Starts local dev server at `localhost:5173`         |
| `npm run build`            | Build your production site to `./docs/dist`         |

## 🏎️ Quick start

Get your demo up and running with these commands:

```bash
npm install
npx gqlmd graphql-to-doc
npm run dev
```

> 🧑‍🚀 **Edit `graphql.config.msj` to try with your own GraphQL schema.**

## 👀 Want to learn more?

Check out [GraphQL-Markdown's docs](https://graphql-markdown.dev/).