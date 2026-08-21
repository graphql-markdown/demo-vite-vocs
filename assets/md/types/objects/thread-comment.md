Forum Thread Comment

```graphql
type ThreadComment {
  id: Int!
  userId: Int
  threadId: Int
  comment(
    asHtml: Boolean
  ): String
  likeCount: Int!
  isLiked: Boolean
  siteUrl: String
  createdAt: Int!
  updatedAt: Int!
  thread: Thread
  user: User
  likes: [User]
  childComments: Json
  isLocked: Boolean
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The user id of the comment's owner

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#thread-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-id}

The id of thread the comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">comment</code></span>](#comment)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#comment}

The text content of the comment (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment.comment</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#thread-comment-comment-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-comment-comment-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#like-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#like-count}

The amount of likes the comment has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#is-liked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-liked}

If the currently authenticated user liked the comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the comment page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time of the comments creation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

The time of the comments last update

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">thread</code></span>](#thread)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#thread}

The thread the comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who created the comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

The users who liked the comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">childComments</code></span>](#child-comments)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#child-comments}

The comment's child reply comments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#is-locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-locked}

If the comment tree is locked and may not receive replies or edits

### Returned By

[`SaveThreadComment`](/operations/mutations/save-thread-comment.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`ThreadComment`](/operations/queries/thread-comment.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentLikeNotification`](/types/objects/thread-comment-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentMentionNotification`](/types/objects/thread-comment-mention-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentReplyNotification`](/types/objects/thread-comment-reply-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadCommentSubscribedNotification`](/types/objects/thread-comment-subscribed-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ThreadLikeNotification`](/types/objects/thread-like-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />

### Implemented By

[`LikeableUnion`](/types/unions/likeable-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
