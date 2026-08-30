Activity type enum.

```graphql
enum ActivityType {
  TEXT
  ANIME_LIST
  MANGA_LIST
  MESSAGE
  MEDIA_LIST
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">TEXT</code></span>](#)

A text activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">ANIME\_LIST</code></span>](#)

A anime list update activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MANGA\_LIST</code></span>](#)

A manga list update activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MESSAGE</code></span>](#)

A text message activity sent to another user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_LIST</code></span>](#)

Anime & Manga list update, only used in query arguments

### Member Of

[`Activity`](/operations/queries/activity.mdx)  :badge[query]<Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  :badge[object]<Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  :badge[object]<Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  :badge[object]
