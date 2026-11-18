# createFolder

Create a virtual folder in the workspace.

```graphql
createFolder(
  name: String!
  parentId: ID
): Folder!
```

### Arguments

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">createFolder</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The name of the new folder.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">createFolder</code>.<code className="gqlmd-mdx-entity-name">parentId</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID</code></span>](/types/scalars/id.mdx) :badge[scalar]

The optional parent folder identifier.

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

A virtual folder used to organize workspace resources.

### Example

```graphql
mutation CreateFolder($name: String!, $parentId: ID) {
  createFolder(name: $name, parentId: $parentId) {
    id
    name
  }
}
```
