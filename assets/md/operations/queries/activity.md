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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the activity id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the owner user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the user who sent a message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the associated media id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

Filter by the type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to users who are being followed by the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">hasReplies</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to only activity with replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">hasRepliesOrTypeText</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to only activity with replies or is of type text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the activity id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the activity id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the activity id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the owner user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the owner user id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">userId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the owner user id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the user who sent a message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the user who sent a message (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the user who sent a message (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the associated media id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the associated media id of the activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the associated media id of the activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

Filter by the type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) :badge[list] :badge[enum]

Filter by the type of activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">type\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) :badge[list] :badge[enum]

Filter by the type of activity (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">createdAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Activity</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivitySort\]</code></span>](/types/enums/activity-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityUnion</code></span>](/types/unions/activity-union.mdx) :badge[union]

Activity union type
