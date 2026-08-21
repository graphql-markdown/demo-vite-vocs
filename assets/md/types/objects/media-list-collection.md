List of anime or manga

```graphql
type MediaListCollection {
  lists: [MediaListGroup]
  user: User
  hasNextChunk: Boolean
  statusLists(
    asArray: Boolean
  ): [[MediaList]] @deprecated
  customLists(
    asArray: Boolean
  ): [[MediaList]] @deprecated
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">lists</code></span>](#lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListGroup\]</code></span>](/types/objects/media-list-group.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#lists}

Grouped media list entries

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The owner of the list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">hasNextChunk</code></span>](#has-next-chunk)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#has-next-chunk}

If there is another chunk

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">statusLists</code></span>](#status-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[\[MediaList\]\]</code></span>](/types/objects/media-list.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#status-lists}

:::warning[DEPRECATED]
Not GraphQL spec compliant, use lists field instead.
:::

A map of media list entry arrays grouped by status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection.statusLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#media-list-collection-status-lists-as-array)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-list-collection-status-lists-as-array}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#custom-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[\[MediaList\]\]</code></span>](/types/objects/media-list.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#custom-lists}

:::warning[DEPRECATED]
Not GraphQL spec compliant, use lists field instead.
:::

A map of media list entry arrays grouped by custom lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection.customLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#media-list-collection-custom-lists-as-array)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-list-collection-custom-lists-as-array}

### Returned By

[`MediaListCollection`](/operations/queries/media-list-collection.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />
