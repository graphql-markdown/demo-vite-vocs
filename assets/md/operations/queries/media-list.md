Media list query

```graphql
MediaList(
  id: Int
  userId: Int
  userName: String
  type: MediaType
  status: MediaListStatus
  mediaId: Int
  isFollowing: Boolean
  notes: String
  startedAt: FuzzyDateInt
  completedAt: FuzzyDateInt
  compareWithAuthList: Boolean
  userId_in: [Int]
  status_in: [MediaListStatus]
  status_not_in: [MediaListStatus]
  status_not: MediaListStatus
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  notes_like: String
  startedAt_greater: FuzzyDateInt
  startedAt_lesser: FuzzyDateInt
  startedAt_like: String
  completedAt_greater: FuzzyDateInt
  completedAt_lesser: FuzzyDateInt
  completedAt_like: String
  sort: [MediaListSort]
): MediaList
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by a list entry's id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by a user's id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">userName</code></span>](#user-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-name}

Filter by a user's name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

Filter by the list entries media type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

Filter by the watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by the media id of the list entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#is-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-following}

Filter list entries to users who are being followed by the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

Filter by note words and #tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#started-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#completed-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">compareWithAuthList</code></span>](#compare-with-auth-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#compare-with-auth-list}

Limit to only entries also on the auth user's list. Requires user id or name arguments.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#user-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id-in}

Filter by a user's id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#status-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-in}

Filter by the watching/reading status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#status-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not-in}

Filter by the watching/reading status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#status-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not}

Filter by the watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-in}

Filter by the media id of the list entry (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not-in}

Filter by the media id of the list entry (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">notes\_like</code></span>](#notes-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes-like}

Filter by note words and #tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_greater</code></span>](#started-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-greater}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_lesser</code></span>](#started-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-lesser}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_like</code></span>](#started-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#started-at-like}

Filter by the date the user started the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_greater</code></span>](#completed-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-greater}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_lesser</code></span>](#completed-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-lesser}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_like</code></span>](#completed-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#completed-at-like}

Filter by the date the user completed the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListSort\]</code></span>](/types/enums/media-list-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaList</code></span>](/types/objects/media-list.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

List of anime or manga
