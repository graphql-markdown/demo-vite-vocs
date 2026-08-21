Activity query

```graphql
Activity(
  id: Int
  userId: Int
  messengerId: Int
  mediaId: Int
  type: ActivityType
  isFollowing: Boolean
  hasReplies: Boolean
  hasRepliesOrTypeText: Boolean
  createdAt: Int
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  userId_not: Int
  userId_in: [Int]
  userId_not_in: [Int]
  messengerId_not: Int
  messengerId_in: [Int]
  messengerId_not_in: [Int]
  mediaId_not: Int
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  type_not: ActivityType
  type_in: [ActivityType]
  type_not_in: [ActivityType]
  createdAt_greater: Int
  createdAt_lesser: Int
  sort: [ActivitySort]
): ActivityUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the activity id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by the owner user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#messenger-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#messenger-id}

Filter by the id of the user who sent a message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by the associated media id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

Filter by the type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#is-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-following}

Filter activity to users who are being followed by the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">hasReplies</code></span>](#has-replies)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#has-replies}

Filter activity to only activity with replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">hasRepliesOrTypeText</code></span>](#has-replies-or-type-text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#has-replies-or-type-text}

Filter activity to only activity with replies or is of type text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not}

Filter by the activity id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by the activity id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not-in}

Filter by the activity id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_not</code></span>](#user-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id-not}

Filter by the owner user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#user-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id-in}

Filter by the owner user id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_not\_in</code></span>](#user-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id-not-in}

Filter by the owner user id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not</code></span>](#messenger-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#messenger-id-not}

Filter by the id of the user who sent a message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_in</code></span>](#messenger-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#messenger-id-in}

Filter by the id of the user who sent a message (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not\_in</code></span>](#messenger-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#messenger-id-not-in}

Filter by the id of the user who sent a message (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not}

Filter by the associated media id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-in}

Filter by the associated media id of the activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not-in}

Filter by the associated media id of the activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_not</code></span>](#type-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type-not}

Filter by the type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#type-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type-in}

Filter by the type of activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_not\_in</code></span>](#type-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type-not-in}

Filter by the type of activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt\_greater</code></span>](#created-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at-greater}

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt\_lesser</code></span>](#created-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at-lesser}

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivitySort\]</code></span>](/types/enums/activity-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityUnion</code></span>](/types/unions/activity-union.mdx) <Chip color="info" label="union" size="small" variant="outlined" />

Activity union type
