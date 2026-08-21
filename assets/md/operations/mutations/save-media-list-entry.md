Create or update a media list entry

```graphql
SaveMediaListEntry(
  id: Int
  mediaId: Int
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
  customLists: [String]
  advancedScores: [Float]
  startedAt: FuzzyDateInput
  completedAt: FuzzyDateInput
): MediaList
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The list entry id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the media the entry is of

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

The watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score}

The score of the media in the user's chosen scoring method (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">scoreRaw</code></span>](#score-raw)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score-raw}

The score of the media in 100 point (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">progress</code></span>](#progress)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#progress}

The amount of episodes/chapters consumed by the user (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">progressVolumes</code></span>](#progress-volumes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#progress-volumes}

The amount of volumes read by the user (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">repeat</code></span>](#repeat)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#repeat}

The amount of times the user has rewatched/read the media (Min: 0, Max: 1000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">priority</code></span>](#priority)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#priority}

Priority of planning (Min: 0, Max: 255)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#private)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#private}

If the entry should only be visible to authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

Text notes (Min: 0, Max: 6000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">hiddenFromStatusLists</code></span>](#hidden-from-status-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#hidden-from-status-lists}

If the entry shown be hidden from non-custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#custom-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#custom-lists}

Array of custom list names which should be enabled for this entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">advancedScores</code></span>](#advanced-scores)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Float\]</code></span>](/types/scalars/float.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#advanced-scores}

Array of advanced scores (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#started-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInput</code></span>](/types/inputs/fuzzy-date-input.mdx) <Chip color="info" label="input" size="small" variant="outlined" /> \{#started-at}

When the entry was started by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMediaListEntry</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#completed-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInput</code></span>](/types/inputs/fuzzy-date-input.mdx) <Chip color="info" label="input" size="small" variant="outlined" /> \{#completed-at}

When the entry was completed by the user

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaList</code></span>](/types/objects/media-list.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

List of anime or manga
