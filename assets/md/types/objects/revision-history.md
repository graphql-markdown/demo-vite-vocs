Feed of mod edit activity

```graphql
type RevisionHistory {
  id: Int!
  action: RevisionHistoryAction
  changes: Json
  user: User
  media: Media
  character: Character
  staff: Staff
  studio: Studio
  externalLink: MediaExternalLink
  createdAt: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">action</code></span>](#action)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RevisionHistoryAction</code></span>](/types/enums/revision-history-action.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#action}

The action taken on the objects

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">changes</code></span>](#changes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#changes}

A JSON object of the fields that changed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who made the edit to the object

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">character</code></span>](#character)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#character}

The character the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

The staff member the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">studio</code></span>](#studio)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#studio}

The studio the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">externalLink</code></span>](#external-link)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaExternalLink</code></span>](/types/objects/media-external-link.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#external-link}

The external link source the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

When the mod feed entry was created

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
