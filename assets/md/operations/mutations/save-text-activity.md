Create or update text activity for the currently authenticated user

```graphql
SaveTextActivity(
  id: Int
  text: String
  locked: Boolean
): TextActivity
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveTextActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The activity's id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveTextActivity</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#text}

The activity text (Min: 5, Max: 10000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveTextActivity</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#locked}

If the activity should be locked. (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">TextActivity</code></span>](/types/objects/text-activity.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

User text activity
