# CreateProjectInput

Input used to create a project.

```graphql
input CreateProjectInput {
  name: String!
  ownerId: ID!
  folderId: ID
  status: ProjectStatus
}
```

### Fields

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The name for the new project.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code className="gqlmd-mdx-entity-name">ownerId</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The identifier of the user who will own the project.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code className="gqlmd-mdx-entity-name">folderId</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID</code></span>](/types/scalars/id.mdx) :badge[scalar]

The optional folder that will contain the project.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CreateProjectInput</code>.<code className="gqlmd-mdx-entity-name">status</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectStatus</code></span>](/types/enums/project-status.mdx) :badge[enum]

The initial lifecycle stage for the project.

### Example

```graphql
{}
```

### Member Of

[`createProject`](/operations/mutations/create-project.mdx)  :badge[mutation]
