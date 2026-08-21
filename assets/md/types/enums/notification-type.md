Notification type enum

```graphql
enum NotificationType {
  ACTIVITY_MESSAGE
  ACTIVITY_REPLY
  FOLLOWING
  ACTIVITY_MENTION
  THREAD_COMMENT_MENTION
  THREAD_SUBSCRIBED
  THREAD_COMMENT_REPLY
  AIRING
  ACTIVITY_LIKE
  ACTIVITY_REPLY_LIKE
  THREAD_LIKE
  THREAD_COMMENT_LIKE
  ACTIVITY_REPLY_SUBSCRIBED
  RELATED_MEDIA_ADDITION
  MEDIA_DATA_CHANGE
  MEDIA_MERGE
  MEDIA_DELETION
  MEDIA_SUBMISSION_UPDATE
  STAFF_SUBMISSION_UPDATE
  CHARACTER_SUBMISSION_UPDATE
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_MESSAGE</code></span>](#activity-message) \{#activity-message}

A user has sent you message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_REPLY</code></span>](#activity-reply) \{#activity-reply}

A user has replied to your activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">FOLLOWING</code></span>](#following) \{#following}

A user has followed you

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_MENTION</code></span>](#activity-mention) \{#activity-mention}

A user has mentioned you in their activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">THREAD\_COMMENT\_MENTION</code></span>](#thread-comment-mention) \{#thread-comment-mention}

A user has mentioned you in a forum comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">THREAD\_SUBSCRIBED</code></span>](#thread-subscribed) \{#thread-subscribed}

A user has commented in one of your subscribed forum threads

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">THREAD\_COMMENT\_REPLY</code></span>](#thread-comment-reply) \{#thread-comment-reply}

A user has replied to your forum comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">AIRING</code></span>](#airing) \{#airing}

An anime you are currently watching has aired

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_LIKE</code></span>](#activity-like) \{#activity-like}

A user has liked your activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_REPLY\_LIKE</code></span>](#activity-reply-like) \{#activity-reply-like}

A user has liked your activity reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">THREAD\_LIKE</code></span>](#thread-like) \{#thread-like}

A user has liked your forum thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">THREAD\_COMMENT\_LIKE</code></span>](#thread-comment-like) \{#thread-comment-like}

A user has liked your forum comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">ACTIVITY\_REPLY\_SUBSCRIBED</code></span>](#activity-reply-subscribed) \{#activity-reply-subscribed}

A user has replied to activity you have also replied to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">RELATED\_MEDIA\_ADDITION</code></span>](#related-media-addition) \{#related-media-addition}

A new anime or manga has been added to the site where its related media is on the user's list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_DATA\_CHANGE</code></span>](#media-data-change) \{#media-data-change}

An anime or manga has had a data change that affects how a user may track it in their lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_MERGE</code></span>](#media-merge) \{#media-merge}

Anime or manga entries on the user's list have been merged into a single entry

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_DELETION</code></span>](#media-deletion) \{#media-deletion}

An anime or manga on the user's list has been deleted from the site

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_SUBMISSION\_UPDATE</code></span>](#media-submission-update) \{#media-submission-update}

A user's submission has been accepted, partially accepted, or rejected

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">STAFF\_SUBMISSION\_UPDATE</code></span>](#staff-submission-update) \{#staff-submission-update}

A user's staff submission has been accepted, partially accepted, or rejected

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationType</code>.<code className="gqlmd-mdx-entity-name">CHARACTER\_SUBMISSION\_UPDATE</code></span>](#character-submission-update) \{#character-submission-update}

A user's character submission has been accepted, partially accepted, or rejected

### Member Of

[`ActivityLikeNotification`](/types/objects/activity-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityMentionNotification`](/types/objects/activity-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityMessageNotification`](/types/objects/activity-message-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplyLikeNotification`](/types/objects/activity-reply-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplyNotification`](/types/objects/activity-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ActivityReplySubscribedNotification`](/types/objects/activity-reply-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`AiringNotification`](/types/objects/airing-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterSubmissionUpdateNotification`](/types/objects/character-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`FollowingNotification`](/types/objects/following-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaDataChangeNotification`](/types/objects/media-data-change-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaDeletionNotification`](/types/objects/media-deletion-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaMergeNotification`](/types/objects/media-merge-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionUpdateNotification`](/types/objects/media-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Notification`](/operations/queries/notification.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`NotificationOption`](/types/objects/notification-option.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`NotificationOptionInput`](/types/inputs/notification-option-input.mdx)  <Chip color="info" label="input" size="small" variant="outlined" /><Bullet />[`RelatedMediaAdditionNotification`](/types/objects/related-media-addition-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffSubmissionUpdateNotification`](/types/objects/staff-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
