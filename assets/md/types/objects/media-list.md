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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the list entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the user owner of the list entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

The watching/reading status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) :badge[scalar]

The score of the entry

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList.score</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) :badge[enum]

Force the score to be returned in the provided format type.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">progress</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of episodes/chapters consumed by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">progressVolumes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of volumes read by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">repeat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of times the user has rewatched/read the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">priority</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Priority of planning

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the entry should only be visible to authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Text notes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">hiddenFromStatusLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the entry shown be hidden from non-custom lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">customLists</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[scalar]

Map of booleans for which custom lists the entry are in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList.customLists</code>.<code className="gqlmd-mdx-entity-name">asArray</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Change return structure to an array of objects

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">advancedScores</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[scalar]

Map of advanced scores with name keys

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

When the entry was started by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

When the entry was completed by the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the entry data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the entry data was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaList</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

### Returned By

[`MediaList`](/operations/queries/media-list.mdx)  :badge[query]<Bullet />[`SaveMediaListEntry`](/operations/mutations/save-media-list-entry.mdx)  :badge[mutation]<Bullet />[`UpdateMediaListEntries`](/operations/mutations/update-media-list-entries.mdx)  :badge[mutation]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Media`](/types/objects/media.mdx)  :badge[object]<Bullet />[`MediaListCollection`](/types/objects/media-list-collection.mdx)  :badge[object]<Bullet />[`MediaListGroup`](/types/objects/media-list-group.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]
