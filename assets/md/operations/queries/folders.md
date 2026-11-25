# folders

List folders available in the current workspace.

```graphql
folders(
  limit: Int
  offset: Int
): [Folder!]!
```

## Arguments

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">folders</code>.<code className="gqlmd-mdx-entity-name">limit</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Maximum number of folders to return.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">folders</code>.<code className="gqlmd-mdx-entity-name">offset</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Number of folders to skip before returning results.

## Type

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

A virtual folder used to organize workspace resources.

## Example

```graphql
query ListFolders {
  folders {
    id
    name
    parent
    createdAt
  }
}
```

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/operations/queries/folders.md)
