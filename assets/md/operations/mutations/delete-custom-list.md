Delete a custom list and remove the list entries from it

```graphql
DeleteCustomList(
  customList: String
  type: MediaType
): Deleted
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">DeleteCustomList</code>.<code className="gqlmd-mdx-entity-name">customList</code></span>](#custom-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#custom-list}

The name of the custom list to delete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">DeleteCustomList</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The media list type of the custom list

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Deleted</code></span>](/types/objects/deleted.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Deleted data type
