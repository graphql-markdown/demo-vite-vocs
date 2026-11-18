# search

Search folders, projects, and users from a single endpoint.

```graphql
search(
  query: String!
): [SearchResult!]!
```

### Arguments

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">search</code>.<code className="gqlmd-mdx-entity-name">query</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

Text matched against folder, project, and user names.

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SearchResult</code></span>](/types/unions/search-result.mdx) :badge[union]

A result returned from global workspace search.

### Example

```graphql
query SearchWorkspace($query: String!) {
  search(query: $query) {
    __typename
    ... on Folder {
      id
      name
    }
    ... on Project {
      id
      name
      status
    }
    ... on User {
      id
      name
      email
    }
  }
}
```
