ExternalLinkSource collection query

```graphql
ExternalLinkSourceCollection(
  id: Int
  type: ExternalLinkType
  mediaType: ExternalLinkMediaType
): [MediaExternalLink]
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the link id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkType</code></span>](/types/enums/external-link-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkMediaType</code></span>](/types/enums/external-link-media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-type}

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaExternalLink</code></span>](/types/objects/media-external-link.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

An external link to another site related to the media or staff member
