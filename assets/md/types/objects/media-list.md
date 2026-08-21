List of anime or manga

```graphql
type MediaList {
  id: Int!
  userId: Int!
  mediaId: Int!
  status: MediaListStatus
  score(
    format: ScoreFormat
  ): Float
  progress: Int
  progressVolumes: Int
  repeat: Int
  priority: Int
  private: Boolean
  notes: String
  hiddenFromStatusLists: Boolean
  customLists(
    asArray: Boolean
  ): Json
  advancedScores: Json
  startedAt: FuzzyDate
  completedAt: FuzzyDate
  updatedAt: Int
  createdAt: Int
  media: Media
  user: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the list entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The id of the user owner of the list entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

The watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score}

The score of the entry

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList.score</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#media-list-score-format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-list-score-format}

Force the score to be returned in the provided format type.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">progress</code></span>](#progress)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#progress}

The amount of episodes/chapters consumed by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">progressVolumes</code></span>](#progress-volumes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#progress-volumes}

The amount of volumes read by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">repeat</code></span>](#repeat)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#repeat}

The amount of times the user has rewatched/read the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">priority</code></span>](#priority)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#priority}

Priority of planning

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#private)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#private}

If the entry should only be visible to authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

Text notes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">hiddenFromStatusLists</code></span>](#hidden-from-status-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#hidden-from-status-lists}

If the entry shown be hidden from non-custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#custom-lists)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#custom-lists}

Map of booleans for which custom lists the entry are in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList.customLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#media-list-custom-lists-as-array)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-list-custom-lists-as-array}

Change return structure to an array of objects

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">advancedScores</code></span>](#advanced-scores)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#advanced-scores}

Map of advanced scores with name keys

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#started-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#started-at}

When the entry was started by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#completed-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#completed-at}

When the entry was completed by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

When the entry data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

When the entry data was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

### Returned By

[`MediaList`](/operations/queries/media-list.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`SaveMediaListEntry`](/operations/mutations/save-media-list-entry.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`UpdateMediaListEntries`](/operations/mutations/update-media-list-entries.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaListCollection`](/types/objects/media-list-collection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaListGroup`](/types/objects/media-list-group.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
