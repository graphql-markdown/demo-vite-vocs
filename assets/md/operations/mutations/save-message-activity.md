Create or update message activity for the currently authenticated user

```graphql
SaveMessageActivity(
  id: Int
  message: String
  recipientId: Int
  private: Boolean
  locked: Boolean
  asMod: Boolean
): MessageActivity
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The activity id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">message</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The activity message text (Min: 2, Max: 10000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">recipientId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the user the message is being sent to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity should be private

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity should be locked. (Mod Only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveMessageActivity</code>.<code className="gqlmd-mdx-entity-name">asMod</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the message should be sent from the Moderator account (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MessageActivity</code></span>](/types/objects/message-activity.mdx) :badge[object]

User message activity
