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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">sectionOrder</code></span>](#section-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#section-order}

The order each list should be displayed in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">splitCompletedSectionByFormat</code></span>](#split-completed-section-by-format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#split-completed-section-by-format}

If the completed sections of the list should be separated by format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">theme</code></span>](#theme)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#theme}

:::warning[DEPRECATED]
This field has not yet been fully implemented and may change without warning
:::

The list theme options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#custom-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#custom-lists}

The names of the user's custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">advancedScoring</code></span>](#advanced-scoring)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#advanced-scoring}

The names of the user's advanced scoring sections

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListTypeOptions</code>.<code className="gqlmd-mdx-entity-name">advancedScoringEnabled</code></span>](#advanced-scoring-enabled)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#advanced-scoring-enabled}

If advanced scoring is enabled

### Member Of

[`MediaListOptions`](/types/objects/media-list-options.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
