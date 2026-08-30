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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">titleLanguage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserTitleLanguage</code></span>](/types/enums/user-title-language.mdx) :badge[enum]

The language the user wants to see media titles in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">displayAdultContent</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Whether the user has enabled viewing of 18+ content

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">airingNotifications</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Whether the user receives notifications when a show they are watching aires

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">profileColor</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Profile highlight color (blue, purple, pink, orange, red, green, gray)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">notificationOptions</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationOption\]</code></span>](/types/objects/notification-option.mdx) :badge[list] :badge[object]

Notification options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">timezone</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The user's timezone offset (Auth user only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">activityMergeTime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">staffNameLanguage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStaffNameLanguage</code></span>](/types/enums/user-staff-name-language.mdx) :badge[enum]

The language the user wants to see staff and character names in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">restrictMessagesToFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Whether the user only allow messages from users they follow

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserOptions</code>.<code className="gqlmd-mdx-entity-name">disabledListActivity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ListActivityOption\]</code></span>](/types/objects/list-activity-option.mdx) :badge[list] :badge[object]

The list activity types the user has disabled from being created from list updates

### Member Of

[`User`](/types/objects/user.mdx)  :badge[object]
