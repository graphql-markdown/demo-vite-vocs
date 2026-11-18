# archiveProject

Archive a project that is no longer active.

```graphql
archiveProject(
  id: ID!
): Project!
```

### Arguments

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">archiveProject</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the project to archive.

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Project</code></span>](/types/objects/project.mdx) :badge[object]

A unit of work tracked in the workspace.

### Example

```graphql
mutation ArchiveProject($id: ID!) {
  archiveProject(id: $id) {
    id
    name
    status
    updatedAt
  }
}
```
