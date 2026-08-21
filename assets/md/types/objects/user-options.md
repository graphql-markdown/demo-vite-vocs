A user's general options

```graphql
type UserOptions {
  titleLanguage: UserTitleLanguage
  displayAdultContent: Boolean
  airingNotifications: Boolean
  profileColor: String
  notificationOptions: [NotificationOption]
  timezone: String
  activityMergeTime: Int
  staffNameLanguage: UserStaffNameLanguage
  restrictMessagesToFollowing: Boolean
  disabledListActivity: [ListActivityOption]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">titleLanguage</code></span>](#title-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserTitleLanguage</code></span>](/types/enums/user-title-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#title-language}

The language the user wants to see media titles in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">displayAdultContent</code></span>](#display-adult-content)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#display-adult-content}

Whether the user has enabled viewing of 18+ content

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">airingNotifications</code></span>](#airing-notifications)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-notifications}

Whether the user receives notifications when a show they are watching aires

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">profileColor</code></span>](#profile-color)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#profile-color}

Profile highlight color (blue, purple, pink, orange, red, green, gray)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">notificationOptions</code></span>](#notification-options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationOption\]</code></span>](/types/objects/notification-option.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#notification-options}

Notification options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">timezone</code></span>](#timezone)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#timezone}

The user's timezone offset (Auth user only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">activityMergeTime</code></span>](#activity-merge-time)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-merge-time}

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">staffNameLanguage</code></span>](#staff-name-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStaffNameLanguage</code></span>](/types/enums/user-staff-name-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-name-language}

The language the user wants to see staff and character names in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">restrictMessagesToFollowing</code></span>](#restrict-messages-to-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#restrict-messages-to-following}

Whether the user only allow messages from users they follow

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">disabledListActivity</code></span>](#disabled-list-activity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ListActivityOption\]</code></span>](/types/objects/list-activity-option.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#disabled-list-activity}

The list activity types the user has disabled from being created from list updates

### Member Of

[`User`](/types/objects/user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
