# ProjectStatus

The lifecycle stage of a project.

```graphql
enum ProjectStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}
```

## Values

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code className="gqlmd-mdx-entity-name">DRAFT</code></span>

The project is being planned and is not yet active.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code className="gqlmd-mdx-entity-name">ACTIVE</code></span>

The project is active and available to collaborators.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectStatus</code>.<code className="gqlmd-mdx-entity-name">ARCHIVED</code></span>

The project is retained for history and no longer active.

## Member Of

[`CreateProjectInput`](/types/inputs/create-project-input.mdx)  :badge[input]<Bullet />[`Project`](/types/objects/project.mdx)  :badge[object]<Bullet />[`projects`](/operations/queries/projects.mdx)  :badge[query]

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/types/enums/project-status.md)
