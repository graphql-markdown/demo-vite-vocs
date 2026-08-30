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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">action</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RevisionHistoryAction</code></span>](/types/enums/revision-history-action.mdx) :badge[enum]

The action taken on the objects

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">changes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) :badge[scalar]

A JSON object of the fields that changed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who made the edit to the object

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The media the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">character</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) :badge[object]

The character the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

The staff member the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">studio</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) :badge[object]

The studio the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">externalLink</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaExternalLink</code></span>](/types/objects/media-external-link.mdx) :badge[object]

The external link source the mod feed entry references

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RevisionHistory</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the mod feed entry was created

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]
