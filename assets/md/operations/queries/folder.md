# folder

Fetch a single folder by its unique identifier.

```graphql
folder(
  id: ID!
): Folder
```

## Arguments

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">folder</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the folder to retrieve.

## Type

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

A virtual folder used to organize workspace resources.

## Example

```graphql
query GetFolder($id: ID!) {
  folder(id: $id) {
    id
    name
    parent
    createdAt
  }
}
```
