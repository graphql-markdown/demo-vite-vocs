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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">entries</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaList\]</code></span>](/types/objects/media-list.mdx) :badge[list] :badge[object]

Media list entries

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">isCustomList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">isSplitCompletedList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListGroup</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

### Member Of

[`MediaListCollection`](/types/objects/media-list-collection.mdx)  :badge[object]
