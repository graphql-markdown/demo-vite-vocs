An external link to another site related to the media or staff member

```graphql
type MediaExternalLink {
  id: Int!
  url: String
  site: String!
  siteId: Int
  type: ExternalLinkType
  language: String
  color: String
  icon: String
  notes: String
  isDisabled: Boolean
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the external link

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">url</code></span>](#url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#url}

The url of the external link or base url of link source

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">site</code></span>](#site)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site}

The links website site name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">siteId</code></span>](#site-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-id}

The links website site id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkType</code></span>](/types/enums/external-link-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#language}

Language the site content is in. See Staff language field for values.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">color</code></span>](#color)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#color}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">icon</code></span>](#icon)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#icon}

The icon image url of the site. Not available for all links. Transparent PNG 64x64

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">isDisabled</code></span>](#is-disabled)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-disabled}

### Returned By

[`ExternalLinkSourceCollection`](/operations/queries/external-link-source-collection.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
