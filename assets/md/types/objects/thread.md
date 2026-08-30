Forum Thread

```graphql
type Thread {
  id: Int!
  title: String
  body(
    asHtml: Boolean
  ): String
  userId: Int!
  replyUserId: Int
  replyCommentId: Int
  replyCount: Int
  viewCount: Int
  isLocked: Boolean
  isSticky: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  repliedAt: Int
  createdAt: Int!
  updatedAt: Int!
  user: User
  replyUser: User
  likes: [User]
  siteUrl: String
  categories: [ThreadCategory]
  mediaCategories: [Media]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The title of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The text body of the thread (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread.body</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the thread owner user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the user who most recently commented on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyCommentId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the most recent comment on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of comments on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">viewCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of times users have viewed the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the thread is locked and can receive comments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isSticky</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the thread is stickied and should be displayed at the top of the page

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user is subscribed to the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The amount of likes the thread has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user liked the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">repliedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The time of the last reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time of the thread creation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time of the thread last update

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The owner of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user to last reply to the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

The users who liked the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the thread page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">categories</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadCategory\]</code></span>](/types/objects/thread-category.mdx) :badge[list] :badge[object]

The categories of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">mediaCategories</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) :badge[list] :badge[object]

The media categories of the thread

### Returned By

[`SaveThread`](/operations/mutations/save-thread.mdx)  :badge[mutation]<Bullet />[`Thread`](/operations/queries/thread.mdx)  :badge[query]<Bullet />[`ToggleThreadSubscription`](/operations/mutations/toggle-thread-subscription.mdx)  :badge[mutation]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`ThreadComment`](/types/objects/thread-comment.mdx)  :badge[object]<Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  :badge[object]<Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  :badge[object]<Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  :badge[object]

### Implemented By

[`LikeableUnion`](/types/unions/likeable-union.mdx)  :badge[union]
