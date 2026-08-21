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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#title)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#title}

The title of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#body)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#body}

The text body of the thread (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread.body</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#thread-body-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-body-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The id of the thread owner user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#reply-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-user-id}

The id of the user who most recently commented on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyCommentId</code></span>](#reply-comment-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-comment-id}

The id of the most recent comment on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#reply-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-count}

The number of comments on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">viewCount</code></span>](#view-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#view-count}

The number of times users have viewed the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#is-locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-locked}

If the thread is locked and can receive comments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isSticky</code></span>](#is-sticky)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-sticky}

If the thread is stickied and should be displayed at the top of the page

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#is-subscribed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-subscribed}

If the currently authenticated user is subscribed to the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#like-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#like-count}

The amount of likes the thread has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#is-liked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-liked}

If the currently authenticated user liked the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">repliedAt</code></span>](#replied-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#replied-at}

The time of the last reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time of the thread creation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

The time of the thread last update

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The owner of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUser</code></span>](#reply-user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#reply-user}

The user to last reply to the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

The users who liked the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the thread page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">categories</code></span>](#categories)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadCategory\]</code></span>](/types/objects/thread-category.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#categories}

The categories of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">mediaCategories</code></span>](#media-categories)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-categories}

The media categories of the thread

### Returned By

[`SaveThread`](/operations/mutations/save-thread.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`Thread`](/operations/queries/thread.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`ToggleThreadSubscription`](/operations/mutations/toggle-thread-subscription.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadComment`](/types/objects/thread-comment.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />

### Implemented By

[`LikeableUnion`](/types/unions/likeable-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
