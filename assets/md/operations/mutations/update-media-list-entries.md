Update multiple media list entries to the same values

```graphql
UpdateMediaListEntries(
  status: MediaListStatus
  score: Float
  scoreRaw: Int
  progress: Int
  progressVolumes: Int
  repeat: Int
  priority: Int
  private: Boolean
  notes: String
  hiddenFromStatusLists: Boolean
  advancedScores: [Float]
  startedAt: FuzzyDateInput
  completedAt: FuzzyDateInput
  ids: [Int]
): [MediaList]
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

The watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) :badge[scalar]

The score of the media in the user's chosen scoring method (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">scoreRaw</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The score of the media in 100 point (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">progress</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of episodes/chapters consumed by the user (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">progressVolumes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of volumes read by the user (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">repeat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of times the user has rewatched/read the media (Min: 0, Max: 1000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">priority</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Priority of planning (Min: 0, Max: 255)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the entry should only be visible to authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Text notes (Min: 0, Max: 6000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">hiddenFromStatusLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the entry shown be hidden from non-custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">advancedScores</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Float\]</code></span>](/types/scalars/float.mdx) :badge[list] :badge[scalar]

Array of advanced scores (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInput</code></span>](/types/inputs/fuzzy-date-input.mdx) :badge[input]

When the entry was started by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInput</code></span>](/types/inputs/fuzzy-date-input.mdx) :badge[input]

When the entry was completed by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateMediaListEntries</code>.<code className="gqlmd-mdx-entity-name">ids</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The list entries ids to update

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaList</code></span>](/types/objects/media-list.mdx) :badge[object]

List of anime or manga
