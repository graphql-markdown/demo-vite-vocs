Toggle the subscription of an activity item

```graphql
ToggleActivitySubscription(
  activityId: Int
  subscribe: Boolean
): ActivityUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivitySubscription</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#activity-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-id}

The id of the activity to un/subscribe

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivitySubscription</code>.<code className="gqlmd-mdx-entity-name">subscribe</code></span>](#subscribe)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#subscribe}

Whether to subscribe or unsubscribe from the activity

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityUnion</code></span>](/types/unions/activity-union.mdx) <Chip color="info" label="union" size="small" variant="outlined" />

Activity union type
