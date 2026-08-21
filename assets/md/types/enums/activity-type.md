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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">TEXT</code></span>](#text) \{#text}

A text activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">ANIME\_LIST</code></span>](#anime-list) \{#anime-list}

A anime list update activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MANGA\_LIST</code></span>](#manga-list) \{#manga-list}

A manga list update activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MESSAGE</code></span>](#message) \{#message}

A text message activity sent to another user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityType</code>.<code className="gqlmd-mdx-entity-name">MEDIA\_LIST</code></span>](#media-list) \{#media-list}

Anime & Manga list update, only used in query arguments

### Member Of

[`Activity`](/operations/queries/activity.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
