# User

A workspace member who owns and collaborates on projects.

```graphql
type User implements Node {
  id: ID!
  name: String!
  email: String!
  role: String!
}
```

## Fields

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the user.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The user's display name.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">email</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The user's primary email address.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">role</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The user's role in the workspace.

## Interfaces

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Node</code></span>](/types/interfaces/node.mdx) :badge[interface]

A globally unique entity identifier.

## Example

```graphql
{
  "id": "user_01",
  "name": "Avery Chen",
  "email": "avery@example.com",
  "role": "Product Lead"
}
```

## Member Of

[`Project`](/types/objects/project.mdx)  :badge[object]<Bullet />[`ProjectEvent`](/types/objects/project-event.mdx)  :badge[object]

## Implemented By

[`SearchResult`](/types/unions/search-result.mdx)  :badge[union]
