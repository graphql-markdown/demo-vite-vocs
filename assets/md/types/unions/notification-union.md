Notification union type

```graphql
union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification | MediaSubmissionUpdateNotification | StaffSubmissionUpdateNotification | CharacterSubmissionUpdateNotification
```

### Possible types

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">AiringNotification</code></span>](/types/objects/airing-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when an episode of anime airs

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">FollowingNotification</code></span>](/types/objects/following-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when the authenticated user is followed by another user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityMessageNotification</code></span>](/types/objects/activity-message-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a user is send an activity message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityMentionNotification</code></span>](/types/objects/activity-mention-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when authenticated user is @ mentioned in activity or reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityReplyNotification</code></span>](/types/objects/activity-reply-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a user replies to the authenticated users activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityReplySubscribedNotification</code></span>](/types/objects/activity-reply-subscribed-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a user replies to activity the authenticated user has replied to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityLikeNotification</code></span>](/types/objects/activity-like-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a activity is liked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ActivityReplyLikeNotification</code></span>](/types/objects/activity-reply-like-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a activity reply is liked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ThreadCommentMentionNotification</code></span>](/types/objects/thread-comment-mention-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when authenticated user is @ mentioned in a forum thread comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ThreadCommentReplyNotification</code></span>](/types/objects/thread-comment-reply-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a user replies to your forum thread comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ThreadCommentSubscribedNotification</code></span>](/types/objects/thread-comment-subscribed-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a user replies to a subscribed forum thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ThreadCommentLikeNotification</code></span>](/types/objects/thread-comment-like-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a thread comment is liked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">ThreadLikeNotification</code></span>](/types/objects/thread-like-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a thread is liked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">RelatedMediaAdditionNotification</code></span>](/types/objects/related-media-addition-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when new media is added to the site

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">MediaDataChangeNotification</code></span>](/types/objects/media-data-change-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a media entry's data was changed in a significant way impacting users' list tracking

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">MediaMergeNotification</code></span>](/types/objects/media-merge-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a media entry is merged into another for a user who had it on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">MediaDeletionNotification</code></span>](/types/objects/media-deletion-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a media tracked in a user's list is deleted from the site

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">MediaSubmissionUpdateNotification</code></span>](/types/objects/media-submission-update-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a media submission is accepted, partially accepted, or rejected

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">StaffSubmissionUpdateNotification</code></span>](/types/objects/staff-submission-update-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a staff submission is accepted, partially accepted, or rejected

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationUnion</code>.<code className="gqlmd-mdx-entity-name">CharacterSubmissionUpdateNotification</code></span>](/types/objects/character-submission-update-notification.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Notification for when a character submission is accepted, partially accepted, or rejected

### Returned By

[`Notification`](/operations/queries/notification.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
