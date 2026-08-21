A user

```graphql
type User {
  id: Int!
  name: String!
  about(
    asHtml: Boolean
  ): String
  avatar: UserAvatar
  bannerImage: String
  isFollowing: Boolean
  isFollower: Boolean
  isBlocked: Boolean
  bans: Json
  options: UserOptions
  mediaListOptions: MediaListOptions
  favourites(
    page: Int
  ): Favourites
  statistics: UserStatisticTypes
  unreadNotificationCount: Int
  siteUrl: String
  donatorTier: Int
  donatorBadge: String
  moderatorRoles: [ModRole]
  createdAt: Int
  updatedAt: Int
  stats: UserStats @deprecated
  moderatorStatus: String @deprecated
  previousNames: [UserPreviousName]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

The name of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">about</code></span>](#about)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#about}

The bio written by user (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User.about</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#user-about-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-about-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">avatar</code></span>](#avatar)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserAvatar</code></span>](/types/objects/user-avatar.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#avatar}

The user's avatar images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">bannerImage</code></span>](#banner-image)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#banner-image}

The user's banner images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#is-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-following}

If the authenticated user if following this user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isFollower</code></span>](#is-follower)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-follower}

If this user if following the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isBlocked</code></span>](#is-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-blocked}

If the user is blocked by the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">bans</code></span>](#bans)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#bans}

List of active bans. Mod-only

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">options</code></span>](#options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserOptions</code></span>](/types/objects/user-options.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#options}

The user's general options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">mediaListOptions</code></span>](#media-list-options)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptions</code></span>](/types/objects/media-list-options.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-list-options}

The user's media list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#favourites)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Favourites</code></span>](/types/objects/favourites.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#favourites}

The users favourites

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User.favourites</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#user-favourites-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-favourites-page}

Deprecated. Use page arguments on each favourite field instead.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">statistics</code></span>](#statistics)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStatisticTypes</code></span>](/types/objects/user-statistic-types.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#statistics}

The users anime & manga list statistics

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">unreadNotificationCount</code></span>](#unread-notification-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#unread-notification-count}

The number of unread notifications the user has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the user page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">donatorTier</code></span>](#donator-tier)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#donator-tier}

The donation tier of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">donatorBadge</code></span>](#donator-badge)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#donator-badge}

Custom donation badge text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">moderatorRoles</code></span>](#moderator-roles)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ModRole\]</code></span>](/types/enums/mod-role.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#moderator-roles}

The user's moderator roles if they are a site moderator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

When the user's account was created. (Does not exist for accounts created before 2020)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

When the user's data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">stats</code></span>](#stats)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStats</code></span>](/types/objects/user-stats.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#stats}

:::warning[DEPRECATED]
Deprecated. Replaced with statistics field.
:::

The user's statistics

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">moderatorStatus</code></span>](#moderator-status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#moderator-status}

:::warning[DEPRECATED]
Deprecated. Replaced with moderatorRoles field.
:::

If the user is a moderator or data moderator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">previousNames</code></span>](#previous-names)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserPreviousName\]</code></span>](/types/objects/user-previous-name.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#previous-names}

The user's previously used names.

### Returned By

[`Follower`](/operations/queries/follower.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`Following`](/operations/queries/following.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`Like`](/operations/queries/like.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`ToggleFollow`](/operations/mutations/toggle-follow.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`ToggleLike`](/operations/mutations/toggle-like.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`UpdateUser`](/operations/mutations/update-user.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`User`](/operations/queries/user.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`Viewer`](/operations/queries/viewer.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`ActivityLikeNotification`](/types/objects/activity-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityMentionNotification`](/types/objects/activity-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityMessageNotification`](/types/objects/activity-message-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReply`](/types/objects/activity-reply.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplyLikeNotification`](/types/objects/activity-reply-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplyNotification`](/types/objects/activity-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplySubscribedNotification`](/types/objects/activity-reply-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`AniChartUser`](/types/objects/ani-chart-user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterSubmission`](/types/objects/character-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`FollowingNotification`](/types/objects/following-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaList`](/types/objects/media-list.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaListCollection`](/types/objects/media-list-collection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ModAction`](/types/objects/mod-action.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Recommendation`](/types/objects/recommendation.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Report`](/types/objects/report.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Review`](/types/objects/review.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Staff`](/types/objects/staff.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffSubmission`](/types/objects/staff-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Thread`](/types/objects/thread.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadComment`](/types/objects/thread-comment.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserModData`](/types/objects/user-mod-data.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
