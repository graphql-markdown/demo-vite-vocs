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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">romaji</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The romanization of the native language title

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.romaji</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">english</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The official english title

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.english</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Official title in it's native language

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle.native</code>.<code className="gqlmd-mdx-entity-name">stylised</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTitle</code>.<code className="gqlmd-mdx-entity-name">userPreferred</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The currently authenticated users preferred title language. Default romaji for non-authenticated

### Member Of

[`Media`](/types/objects/media.mdx)  :badge[object]
