List group of anime or manga entries

```graphql
type MediaListGroup {
  entries: [MediaList]
  name: String
  isCustomList: Boolean
  isSplitCompletedList: Boolean
  status: MediaListStatus
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">entries</code></span>](#entries)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaList\]</code></span>](/types/objects/media-list.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#entries}

Media list entries

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">isCustomList</code></span>](#is-custom-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-custom-list}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">isSplitCompletedList</code></span>](#is-split-completed-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-split-completed-list}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

### Member Of

[`MediaListCollection`](/types/objects/media-list-collection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
