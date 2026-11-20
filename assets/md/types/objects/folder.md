# Folder

A virtual folder used to organize workspace resources.

```graphql
type Folder implements Node {
  id: ID!
  name: String!
  parent: String
  createdAt: DateTime!
}
```

## Fields

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Folder</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the folder.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Folder</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The human-readable folder name.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Folder</code>.<code className="gqlmd-mdx-entity-name">parent</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The identifier of the parent folder, when nested.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Folder</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">DateTime!</code></span>](/types/scalars/date-time.mdx) :badge[non-null] :badge[scalar]

When the folder was created.

## Interfaces

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Node</code></span>](/types/interfaces/node.mdx) :badge[interface]

A globally unique entity identifier.

## Example

```graphql
{
  "id": "folder_01",
  "name": "Product Planning",
  "parent": "folder_root",
  "createdAt": "2026-09-05T09:30:00Z"
}
```

## Returned By

[`createFolder`](/operations/mutations/create-folder.mdx)  :badge[mutation]<Bullet />[`folder`](/operations/queries/folder.mdx)  :badge[query]<Bullet />[`folderCreated`](/operations/subscriptions/folder-created.mdx)  :badge[subscription]<Bullet />[`folders`](/operations/queries/folders.mdx)  :badge[query]

## Member Of

[`Project`](/types/objects/project.mdx)  :badge[object]

## Implemented By

[`SearchResult`](/types/unions/search-result.mdx)  :badge[union]
