A user's list options for anime or manga lists

```graphql
type MediaListTypeOptions {
  sectionOrder: [String]
  splitCompletedSectionByFormat: Boolean
  theme: Json @deprecated
  customLists: [String]
  advancedScoring: [String]
  advancedScoringEnabled: Boolean
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">sectionOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The order each list should be displayed in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">splitCompletedSectionByFormat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the completed sections of the list should be separated by format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">theme</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
This field has not yet been fully implemented and may change without warning
:::

The list theme options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The names of the user's custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">advancedScoring</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The names of the user's advanced scoring sections

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">advancedScoringEnabled</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If advanced scoring is enabled

### Member Of

[`MediaListOptions`](/types/objects/media-list-options.mdx)  :badge[object]
