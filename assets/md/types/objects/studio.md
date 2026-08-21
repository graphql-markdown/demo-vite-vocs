Animation or production company

```graphql
type Studio {
  id: Int!
  name: String!
  isAnimationStudio: Boolean!
  media(
    sort: [MediaSort]
    isMain: Boolean
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  siteUrl: String
  isFavourite: Boolean!
  favourites: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the studio

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

The name of the studio

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">isAnimationStudio</code></span>](#is-animation-studio)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-animation-studio}

If the studio is an animation studio or a different kind of company

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media the studio has worked on

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#studio-media-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#studio-media-sort}

The order the results will be returned in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#studio-media-is-main)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-media-is-main}

If the studio was the primary animation studio of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#studio-media-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-media-on-list}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#studio-media-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-media-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#studio-media-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-media-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the studio page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#is-favourite)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite}

If the studio is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#favourites)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites}

The amount of user's who have favourited the studio

### Returned By

[`Studio`](/operations/queries/studio.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StudioConnection`](/types/objects/studio-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StudioEdge`](/types/objects/studio-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StudioStats`](/types/objects/studio-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserStudioStatistic`](/types/objects/user-studio-statistic.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
