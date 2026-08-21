Toggle the subscription of a forum thread

```graphql
ToggleThreadSubscription(
  threadId: Int
  subscribe: Boolean
): Thread
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleThreadSubscription</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#thread-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-id}

The id of the forum thread to un/subscribe

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleThreadSubscription</code>.<code className="gqlmd-mdx-entity-name">subscribe</code></span>](#subscribe)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#subscribe}

Whether to subscribe or unsubscribe from the forum thread

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Forum Thread
