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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the external link

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">url</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url of the external link or base url of link source

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">site</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The links website site name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">siteId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The links website site id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ExternalLinkType</code></span>](/types/enums/external-link-type.mdx) :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Language the site content is in. See Staff language field for values.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">color</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">icon</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The icon image url of the site. Not available for all links. Transparent PNG 64x64

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaExternalLink</code>.<code className="gqlmd-mdx-entity-name">isDisabled</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

### Returned By

[`ExternalLinkSourceCollection`](/operations/queries/external-link-source-collection.mdx)  :badge[query]

### Member Of

[`Media`](/types/objects/media.mdx)  :badge[object]<Bullet />[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  :badge[object]<Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]
