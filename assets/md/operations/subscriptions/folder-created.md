# folderCreated

Receive folders as they are created in the workspace.

```graphql
folderCreated(
  parentId: ID
): Folder!
```

## Arguments

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">folderCreated</code>.<code className="gqlmd-mdx-entity-name">parentId</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID</code></span>](/types/scalars/id.mdx) :badge[scalar]

Limit events to folders created under this parent.

## Type

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

A virtual folder used to organize workspace resources.

## Example

```graphql
subscription WatchFolders($parentId: ID) {
  folderCreated(parentId: $parentId) {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/operations/subscriptions/folder-created.md)
