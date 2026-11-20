# createProject

Create a project and assign its initial owner.

```graphql
createProject(
  input: CreateProjectInput!
): Project!
```

## Arguments

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">createProject</code>.<code className="gqlmd-mdx-entity-name">input</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CreateProjectInput!</code></span>](/types/inputs/create-project-input.mdx) :badge[non-null] :badge[input]

The project attributes to create.

## Type

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Project</code></span>](/types/objects/project.mdx) :badge[object]

A unit of work tracked in the workspace.

## Example

```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    status
    folder {
      id
      name
    }
  }
}
```
