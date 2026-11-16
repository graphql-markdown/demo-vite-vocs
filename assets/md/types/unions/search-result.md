# SearchResult

A result returned from global workspace search.

```graphql
union SearchResult = Folder | Project | User
```

### Possible types

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SearchResult</code>.<code className="gqlmd-mdx-entity-name">Folder</code></span>](/types/objects/folder.mdx) :badge[object]

A virtual folder used to organize workspace resources.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SearchResult</code>.<code className="gqlmd-mdx-entity-name">Project</code></span>](/types/objects/project.mdx) :badge[object]

A unit of work tracked in the workspace.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SearchResult</code>.<code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

A workspace member who owns and collaborates on projects.

### Returned By

[`search`](/operations/queries/search.mdx)  :badge[query]
