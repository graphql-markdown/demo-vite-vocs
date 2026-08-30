ExternalLinkSource collection query

```graphql
ExternalLinkSourceCollection(
  id: Int
  type: ExternalLinkType
  mediaType: ExternalLinkMediaType
): [MediaExternalLink]
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the link id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkType</code></span>](/types/enums/external-link-type.mdx) :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ExternalLinkSourceCollection</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkMediaType</code></span>](/types/enums/external-link-media-type.mdx) :badge[enum]

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaExternalLink</code></span>](/types/objects/media-external-link.mdx) :badge[object]

An external link to another site related to the media or staff member
