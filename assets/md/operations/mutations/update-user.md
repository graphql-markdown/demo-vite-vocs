No description

```graphql
UpdateUser(
  about: String
  titleLanguage: UserTitleLanguage
  displayAdultContent: Boolean
  airingNotifications: Boolean
  scoreFormat: ScoreFormat
  rowOrder: String
  profileColor: String
  donatorBadge: String
  notificationOptions: [NotificationOptionInput]
  timezone: String
  activityMergeTime: Int
  animeListOptions: MediaListOptionsInput
  mangaListOptions: MediaListOptionsInput
  staffNameLanguage: UserStaffNameLanguage
  restrictMessagesToFollowing: Boolean
  disabledListActivity: [ListActivityOptionInput]
): User
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">about</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

User's about/bio text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">titleLanguage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserTitleLanguage</code></span>](/types/enums/user-title-language.mdx) :badge[enum]

User's title language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">displayAdultContent</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the user should see media marked as adult-only

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">airingNotifications</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the user should get notifications when a show they are watching aires

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">scoreFormat</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) :badge[enum]

The user's list scoring system

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">rowOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The user's default list order

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">profileColor</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Profile highlight color

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">donatorBadge</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Profile highlight color (Max: 24)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">notificationOptions</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationOptionInput\]</code></span>](/types/inputs/notification-option-input.mdx) :badge[list] :badge[input]

Notification options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">timezone</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Timezone offset format: -?HH:MM

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">activityMergeTime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">animeListOptions</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptionsInput</code></span>](/types/inputs/media-list-options-input.mdx) :badge[input]

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">mangaListOptions</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptionsInput</code></span>](/types/inputs/media-list-options-input.mdx) :badge[input]

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">staffNameLanguage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStaffNameLanguage</code></span>](/types/enums/user-staff-name-language.mdx) :badge[enum]

The language the user wants to see staff and character names in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">restrictMessagesToFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Only allow messages from other users the user follows

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">disabledListActivity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ListActivityOptionInput\]</code></span>](/types/inputs/list-activity-option-input.mdx) :badge[list] :badge[input]

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

A user
