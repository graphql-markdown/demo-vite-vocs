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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">animeIds</code></span>](#anime-ids)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#anime-ids}

The id of the anime to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">mangaIds</code></span>](#manga-ids)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#manga-ids}

The id of the manga to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">characterIds</code></span>](#character-ids)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-ids}

The id of the character to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">staffIds</code></span>](#staff-ids)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-ids}

The id of the staff to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">studioIds</code></span>](#studio-ids)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-ids}

The id of the studio to un/favourite

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">animeOrder</code></span>](#anime-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#anime-order}

List of integers which the anime should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">mangaOrder</code></span>](#manga-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#manga-order}

List of integers which the manga should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">characterOrder</code></span>](#character-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-order}

List of integers which the character should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">staffOrder</code></span>](#staff-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-order}

List of integers which the staff should be ordered by (Asc)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UpdateFavouriteOrder</code>.<code className="gqlmd-mdx-entity-name">studioOrder</code></span>](#studio-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#studio-order}

List of integers which the studio should be ordered by (Asc)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Favourites</code></span>](/types/objects/favourites.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

User's favourite anime, manga, characters, staff & studios
