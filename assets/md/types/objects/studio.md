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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the studio

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The name of the studio

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">isAnimationStudio</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the studio is an animation studio or a different kind of company

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

The media the studio has worked on

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the studio was the primary animation studio of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio.media</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the studio page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the studio is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of user's who have favourited the studio

### Returned By

[`Studio`](/operations/queries/studio.mdx)  :badge[query]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]<Bullet />[`StudioConnection`](/types/objects/studio-connection.mdx)  :badge[object]<Bullet />[`StudioEdge`](/types/objects/studio-edge.mdx)  :badge[object]<Bullet />[`StudioStats`](/types/objects/studio-stats.mdx)  :badge[object]<Bullet />[`UserStudioStatistic`](/types/objects/user-studio-statistic.mdx)  :badge[object]
