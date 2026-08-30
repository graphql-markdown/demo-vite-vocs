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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">scoreFormat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) :badge[enum]

The score format the user is using for media lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">rowOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The default order list rows should be displayed in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">useLegacyLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
No longer used
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">animeList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListTypeOptions</code></span>](/types/objects/media-list-type-options.mdx) :badge[object]

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">mangaList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListTypeOptions</code></span>](/types/objects/media-list-type-options.mdx) :badge[object]

The user's manga list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">sharedTheme</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
No longer used
:::

The list theme options for both lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListOptions</code>.<code className="gqlmd-mdx-entity-name">sharedThemeEnabled</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
No longer used
:::

If the shared theme should be used instead of the individual list themes

### Member Of

[`User`](/types/objects/user.mdx)  :badge[object]
