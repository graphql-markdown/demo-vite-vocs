Update the order favourites are displayed in

```graphql
UpdateFavouriteOrder(
  animeIds: [Int]
  mangaIds: [Int]
  characterIds: [Int]
  staffIds: [Int]
  studioIds: [Int]
  animeOrder: [Int]
  mangaOrder: [Int]
  characterOrder: [Int]
  staffOrder: [Int]
  studioOrder: [Int]
): Favourites
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">animeIds</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The id of the anime to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">mangaIds</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The id of the manga to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">characterIds</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The id of the character to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">staffIds</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The id of the staff to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">studioIds</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

The id of the studio to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">animeOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

List of integers which the anime should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">mangaOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

List of integers which the manga should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">characterOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

List of integers which the character should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">staffOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

List of integers which the staff should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">studioOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

List of integers which the studio should be ordered by (Asc)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Favourites</code></span>](/types/objects/favourites.mdx) :badge[object]

User's favourite anime, manga, characters, staff & studios
