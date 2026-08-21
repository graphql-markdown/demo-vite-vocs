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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">about</code></span>](#about)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#about}

User's about/bio text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">titleLanguage</code></span>](#title-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserTitleLanguage</code></span>](/types/enums/user-title-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#title-language}

User's title language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">displayAdultContent</code></span>](#display-adult-content)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#display-adult-content}

If the user should see media marked as adult-only

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">airingNotifications</code></span>](#airing-notifications)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-notifications}

If the user should get notifications when a show they are watching aires

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">scoreFormat</code></span>](#score-format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ScoreFormat</code></span>](/types/enums/score-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#score-format}

The user's list scoring system

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">rowOrder</code></span>](#row-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#row-order}

The user's default list order

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">profileColor</code></span>](#profile-color)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#profile-color}

Profile highlight color

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">donatorBadge</code></span>](#donator-badge)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#donator-badge}

Profile highlight color (Max: 24)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">notificationOptions</code></span>](#notification-options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationOptionInput\]</code></span>](/types/inputs/notification-option-input.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="input" size="small" variant="outlined" /> \{#notification-options}

Notification options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">timezone</code></span>](#timezone)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#timezone}

Timezone offset format: -?HH:MM

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">activityMergeTime</code></span>](#activity-merge-time)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-merge-time}

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. (Min: 0)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">animeListOptions</code></span>](#anime-list-options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptionsInput</code></span>](/types/inputs/media-list-options-input.mdx) <Chip color="info" label="input" size="small" variant="outlined" /> \{#anime-list-options}

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">mangaListOptions</code></span>](#manga-list-options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptionsInput</code></span>](/types/inputs/media-list-options-input.mdx) <Chip color="info" label="input" size="small" variant="outlined" /> \{#manga-list-options}

The user's anime list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">staffNameLanguage</code></span>](#staff-name-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStaffNameLanguage</code></span>](/types/enums/user-staff-name-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-name-language}

The language the user wants to see staff and character names in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">restrictMessagesToFollowing</code></span>](#restrict-messages-to-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#restrict-messages-to-following}

Only allow messages from other users the user follows

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateUser</code>.<code className="gqlmd-mdx-entity-name">disabledListActivity</code></span>](#disabled-list-activity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ListActivityOptionInput\]</code></span>](/types/inputs/list-activity-option-input.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="input" size="small" variant="outlined" /> \{#disabled-list-activity}

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A user
