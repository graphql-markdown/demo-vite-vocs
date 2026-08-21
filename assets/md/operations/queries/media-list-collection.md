Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.

```graphql
MediaListCollection(
  userId: Int
  userName: String
  type: MediaType
  status: MediaListStatus
  notes: String
  startedAt: FuzzyDateInt
  completedAt: FuzzyDateInt
  forceSingleCompletedList: Boolean
  chunk: Int
  perChunk: Int
  status_in: [MediaListStatus]
  status_not_in: [MediaListStatus]
  status_not: MediaListStatus
  notes_like: String
  startedAt_greater: FuzzyDateInt
  startedAt_lesser: FuzzyDateInt
  startedAt_like: String
  completedAt_greater: FuzzyDateInt
  completedAt_lesser: FuzzyDateInt
  completedAt_like: String
  sort: [MediaListSort]
): MediaListCollection
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by a user's id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">userName</code></span>](#user-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-name}

Filter by a user's name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

Filter by the list entries media type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

Filter by the watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

Filter by note words and #tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#started-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#completed-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">forceSingleCompletedList</code></span>](#force-single-completed-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#force-single-completed-list}

Always return completed list entries in one group, overriding the user's split completed option.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">chunk</code></span>](#chunk)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chunk}

Which chunk of list entries to load

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">perChunk</code></span>](#per-chunk)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#per-chunk}

The amount of entries per chunk, max 500

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#status-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-in}

Filter by the watching/reading status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#status-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not-in}

Filter by the watching/reading status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#status-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not}

Filter by the watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">notes\_like</code></span>](#notes-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes-like}

Filter by note words and #tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">startedAt\_greater</code></span>](#started-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-greater}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">startedAt\_lesser</code></span>](#started-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-lesser}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">startedAt\_like</code></span>](#started-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-like}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">completedAt\_greater</code></span>](#completed-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-greater}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">completedAt\_lesser</code></span>](#completed-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-lesser}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">completedAt\_like</code></span>](#completed-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-like}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListCollection</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListSort\]</code></span>](/types/enums/media-list-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListCollection</code></span>](/types/objects/media-list-collection.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

List of anime or manga
