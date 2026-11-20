# Project

A unit of work tracked in the workspace.

```graphql
type Project implements Node {
  id: ID!
  name: String!
  status: ProjectStatus!
  owner: User!
  folder: Folder
  updatedAt: DateTime!
  state: String @deprecated
}
```

## Fields

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the project.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The project name shown to collaborators.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">status</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectStatus!</code></span>](/types/enums/project-status.mdx) :badge[non-null] :badge[enum]

The current lifecycle stage of the project.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">owner</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User!</code></span>](/types/objects/user.mdx) :badge[non-null] :badge[object]

The user responsible for the project.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">folder</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

The folder containing this project, when assigned.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">DateTime!</code></span>](/types/scalars/date-time.mdx) :badge[non-null] :badge[scalar]

When the project was last updated.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Project</code>.<code className="gqlmd-mdx-entity-name">state</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
Replaced by the `ProjectStatus` enum on status.
:::

The project's lifecycle stage.

## Interfaces

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Node</code></span>](/types/interfaces/node.mdx) :badge[interface]

A globally unique entity identifier.

## Example

```graphql
{
  "id": "project_01",
  "name": "Mobile Refresh",
  "status": "ACTIVE",
  "owner": {
    "id": "user_01",
    "name": "Avery Chen"
  },
  "updatedAt": "2026-09-05T10:15:00Z"
}
```

## Returned By

[`archiveProject`](/operations/mutations/archive-project.mdx)  :badge[mutation]<Bullet />[`createProject`](/operations/mutations/create-project.mdx)  :badge[mutation]

## Member Of

[`ProjectConnection`](/types/objects/project-connection.mdx)  :badge[object]<Bullet />[`ProjectEvent`](/types/objects/project-event.mdx)  :badge[object]

## Implemented By

[`SearchResult`](/types/unions/search-result.mdx)  :badge[union]
