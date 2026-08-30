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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">lists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListGroup\]</code></span>](/types/objects/media-list-group.mdx) :badge[list] :badge[object]

Grouped media list entries

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The owner of the list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">hasNextChunk</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If there is another chunk

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">statusLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[\[MediaList\]\]</code></span>](/types/objects/media-list.mdx) :badge[deprecated]{warning} :badge[list] :badge[object]

:::warning[DEPRECATED]
Not GraphQL spec compliant, use lists field instead.
:::

A map of media list entry arrays grouped by status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection.statusLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[\[MediaList\]\]</code></span>](/types/objects/media-list.mdx) :badge[deprecated]{warning} :badge[list] :badge[object]

:::warning[DEPRECATED]
Not GraphQL spec compliant, use lists field instead.
:::

A map of media list entry arrays grouped by custom lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection.customLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

### Returned By

[`MediaListCollection`](/operations/queries/media-list-collection.mdx)  :badge[query]
