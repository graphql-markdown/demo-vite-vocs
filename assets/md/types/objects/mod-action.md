No description

```graphql
type ModAction {
  id: Int!
  user: User
  mod: User
  type: ModActionType
  objectId: Int
  objectType: String
  data: String
  createdAt: Int!
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the action

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">mod</code></span>](#mod)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#mod}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ModActionType</code></span>](/types/enums/mod-action-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">objectId</code></span>](#object-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#object-id}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">objectType</code></span>](#object-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#object-type}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">data</code></span>](#data)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#data}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ModAction</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
