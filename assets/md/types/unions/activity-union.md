Activity union type

```graphql
union ActivityUnion = TextActivity | ListActivity | MessageActivity
```

### Possible types

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityUnion</code>.<code className="gqlmd-mdx-entity-name">TextActivity</code></span>](/types/objects/text-activity.mdx) :badge[object]

User text activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityUnion</code>.<code className="gqlmd-mdx-entity-name">ListActivity</code></span>](/types/objects/list-activity.mdx) :badge[object]

User list activity (anime & manga updates)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityUnion</code>.<code className="gqlmd-mdx-entity-name">MessageActivity</code></span>](/types/objects/message-activity.mdx) :badge[object]

User message activity

### Returned By

[`Activity`](/operations/queries/activity.mdx)  :badge[query]<Bullet />[`ToggleActivityPin`](/operations/mutations/toggle-activity-pin.mdx)  :badge[mutation]<Bullet />[`ToggleActivitySubscription`](/operations/mutations/toggle-activity-subscription.mdx)  :badge[mutation]

### Member Of

[`ActivityLikeNotification`](/types/objects/activity-like-notification.mdx)  :badge[object]<Bullet />[`ActivityMentionNotification`](/types/objects/activity-mention-notification.mdx)  :badge[object]<Bullet />[`ActivityReplyLikeNotification`](/types/objects/activity-reply-like-notification.mdx)  :badge[object]<Bullet />[`ActivityReplyNotification`](/types/objects/activity-reply-notification.mdx)  :badge[object]<Bullet />[`ActivityReplySubscribedNotification`](/types/objects/activity-reply-subscribed-notification.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]
