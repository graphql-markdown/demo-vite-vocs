The official titles of the media in various languages

```graphql
type MediaTitle {
  romaji(
    stylised: Boolean
  ): String
  english(
    stylised: Boolean
  ): String
  native(
    stylised: Boolean
  ): String
  userPreferred: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">romaji</code></span>](#romaji)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#romaji}

The romanization of the native language title

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.romaji</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#media-title-romaji-stylised)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-title-romaji-stylised}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">english</code></span>](#english)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#english}

The official english title

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.english</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#media-title-english-stylised)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-title-english-stylised}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#native)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#native}

Official title in it's native language

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.native</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#media-title-native-stylised)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-title-native-stylised}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">userPreferred</code></span>](#user-preferred)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-preferred}

The currently authenticated users preferred title language. Default romaji for non-authenticated

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
