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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The name of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">about</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The bio written by user (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User.about</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">avatar</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserAvatar</code></span>](/types/objects/user-avatar.mdx) :badge[object]

The user's avatar images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">bannerImage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The user's banner images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the authenticated user if following this user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isFollower</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If this user if following the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the user is blocked by the authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">bans</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[scalar]

List of active bans. Mod-only

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">options</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserOptions</code></span>](/types/objects/user-options.mdx) :badge[object]

The user's general options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">mediaListOptions</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListOptions</code></span>](/types/objects/media-list-options.mdx) :badge[object]

The user's media list options

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Favourites</code></span>](/types/objects/favourites.mdx) :badge[object]

The users favourites

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User.favourites</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Deprecated. Use page arguments on each favourite field instead.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">statistics</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStatisticTypes</code></span>](/types/objects/user-statistic-types.mdx) :badge[object]

The users anime & manga list statistics

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">unreadNotificationCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of unread notifications the user has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the user page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">donatorTier</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The donation tier of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">donatorBadge</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Custom donation badge text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">moderatorRoles</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ModRole\]</code></span>](/types/enums/mod-role.mdx) :badge[list] :badge[enum]

The user's moderator roles if they are a site moderator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the user's account was created. (Does not exist for accounts created before 2020)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the user's data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">stats</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">UserStats</code></span>](/types/objects/user-stats.mdx) :badge[deprecated]{warning} :badge[object]

:::warning[DEPRECATED]
Deprecated. Replaced with statistics field.
:::

The user's statistics

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">moderatorStatus</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
Deprecated. Replaced with moderatorRoles field.
:::

If the user is a moderator or data moderator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">previousNames</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserPreviousName\]</code></span>](/types/objects/user-previous-name.mdx) :badge[list] :badge[object]

The user's previously used names.

### Returned By

[`Follower`](/operations/queries/follower.mdx)  :badge[query]<Bullet />[`Following`](/operations/queries/following.mdx)  :badge[query]<Bullet />[`Like`](/operations/queries/like.mdx)  :badge[query]<Bullet />[`ToggleFollow`](/operations/mutations/toggle-follow.mdx)  :badge[mutation]<Bullet />[`ToggleLike`](/operations/mutations/toggle-like.mdx)  :badge[mutation]<Bullet />[`UpdateUser`](/operations/mutations/update-user.mdx)  :badge[mutation]<Bullet />[`User`](/operations/queries/user.mdx)  :badge[query]<Bullet />[`Viewer`](/operations/queries/viewer.mdx)  :badge[query]

### Member Of

[`ActivityLikeNotification`](/types/objects/activity-like-notification.mdx)  :badge[object]<Bullet />[`ActivityMentionNotification`](/types/objects/activity-mention-notification.mdx)  :badge[object]<Bullet />[`ActivityMessageNotification`](/types/objects/activity-message-notification.mdx)  :badge[object]<Bullet />[`ActivityReply`](/types/objects/activity-reply.mdx)  :badge[object]<Bullet />[`ActivityReplyLikeNotification`](/types/objects/activity-reply-like-notification.mdx)  :badge[object]<Bullet />[`ActivityReplyNotification`](/types/objects/activity-reply-notification.mdx)  :badge[object]<Bullet />[`ActivityReplySubscribedNotification`](/types/objects/activity-reply-subscribed-notification.mdx)  :badge[object]<Bullet />[`AniChartUser`](/types/objects/ani-chart-user.mdx)  :badge[object]<Bullet />[`CharacterSubmission`](/types/objects/character-submission.mdx)  :badge[object]<Bullet />[`FollowingNotification`](/types/objects/following-notification.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  :badge[object]<Bullet />[`MediaList`](/types/objects/media-list.mdx)  :badge[object]<Bullet />[`MediaListCollection`](/types/objects/media-list-collection.mdx)  :badge[object]<Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  :badge[object]<Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  :badge[object]<Bullet />[`ModAction`](/types/objects/mod-action.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`Recommendation`](/types/objects/recommendation.mdx)  :badge[object]<Bullet />[`Report`](/types/objects/report.mdx)  :badge[object]<Bullet />[`Review`](/types/objects/review.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]<Bullet />[`Staff`](/types/objects/staff.mdx)  :badge[object]<Bullet />[`StaffSubmission`](/types/objects/staff-submission.mdx)  :badge[object]<Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  :badge[object]<Bullet />[`Thread`](/types/objects/thread.mdx)  :badge[object]<Bullet />[`ThreadComment`](/types/objects/thread-comment.mdx)  :badge[object]<Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  :badge[object]<Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  :badge[object]<Bullet />[`UserModData`](/types/objects/user-mod-data.mdx)  :badge[object]
