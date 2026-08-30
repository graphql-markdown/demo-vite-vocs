A user's list options for anime or manga lists

```graphql
input MediaListOptionsInput {
  sectionOrder: [String]
  splitCompletedSectionByFormat: Boolean
  customLists: [String]
  advancedScoring: [String]
  advancedScoringEnabled: Boolean
  theme: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">sectionOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The order each list should be displayed in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">splitCompletedSectionByFormat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the completed sections of the list should be separated by format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The names of the user's custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">advancedScoring</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The names of the user's advanced scoring sections

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">advancedScoringEnabled</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If advanced scoring is enabled

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptionsInput</code>.<code className="gqlmd-mdx-entity-name">theme</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

list theme

### Member Of

[`UpdateUser`](/operations/mutations/update-user.mdx)  :badge[mutation]
