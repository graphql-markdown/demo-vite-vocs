Create or update an activity reply

```graphql
SaveActivityReply(
  id: Int
  activityId: Int
  text: String
  asMod: Boolean
): ActivityReply
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveActivityReply</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The activity reply id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveActivityReply</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#activity-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-id}

The id of the parent activity being replied to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveActivityReply</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#text}

The reply text (Min: 2, Max: 8000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveActivityReply</code>.<code className="gqlmd-mdx-entity-name">asMod</code></span>](#as-mod)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#as-mod}

If the reply should be sent from the Moderator account (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityReply</code></span>](/types/objects/activity-reply.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Replay to an activity item
