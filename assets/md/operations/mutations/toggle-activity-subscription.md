Toggle the subscription of an activity item

```graphql
ToggleActivitySubscription(
  activityId: Int
  subscribe: Boolean
): ActivityUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivitySubscription</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the activity to un/subscribe

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivitySubscription</code>.<code className="gqlmd-mdx-entity-name">subscribe</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Whether to subscribe or unsubscribe from the activity

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityUnion</code></span>](/types/unions/activity-union.mdx) :badge[union]

Activity union type
