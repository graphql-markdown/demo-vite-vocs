A user's list options

```graphql
type MediaListOptions {
  scoreFormat: ScoreFormat
  rowOrder: String
  useLegacyLists: Boolean @deprecated
  animeList: MediaListTypeOptions
  mangaList: MediaListTypeOptions
  sharedTheme: Json @deprecated
  sharedThemeEnabled: Boolean @deprecated
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">scoreFormat</code></span>](#score-format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#score-format}

The score format the user is using for media lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">rowOrder</code></span>](#row-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#row-order}

The default order list rows should be displayed in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">useLegacyLists</code></span>](#use-legacy-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#use-legacy-lists}

:::warning[DEPRECATED]
No longer used
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">animeList</code></span>](#anime-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListTypeOptions</code></span>](/types/objects/media-list-type-options.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime-list}

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">mangaList</code></span>](#manga-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListTypeOptions</code></span>](/types/objects/media-list-type-options.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga-list}

The user's manga list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">sharedTheme</code></span>](#shared-theme)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#shared-theme}

:::warning[DEPRECATED]
No longer used
:::

The list theme options for both lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">sharedThemeEnabled</code></span>](#shared-theme-enabled)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#shared-theme-enabled}

:::warning[DEPRECATED]
No longer used
:::

If the shared theme should be used instead of the individual list themes

### Member Of

[`User`](/types/objects/user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
