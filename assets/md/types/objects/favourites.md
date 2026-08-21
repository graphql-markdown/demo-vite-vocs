User's favourite anime, manga, characters, staff & studios

```graphql
type Favourites {
  anime(
    page: Int
    perPage: Int
  ): MediaConnection
  manga(
    page: Int
    perPage: Int
  ): MediaConnection
  characters(
    page: Int
    perPage: Int
  ): CharacterConnection
  staff(
    page: Int
    perPage: Int
  ): StaffConnection
  studios(
    page: Int
    perPage: Int
  ): StudioConnection
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">anime</code></span>](#anime)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime}

Favourite anime

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.anime</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#favourites-anime-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-anime-page}

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.anime</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#favourites-anime-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-anime-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">manga</code></span>](#manga)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga}

Favourite manga

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.manga</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#favourites-manga-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-manga-page}

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.manga</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#favourites-manga-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-manga-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

Favourite characters

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#favourites-characters-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-characters-page}

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#favourites-characters-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-characters-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffConnection</code></span>](/types/objects/staff-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

Favourite staff

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#favourites-staff-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-staff-page}

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#favourites-staff-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-staff-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StudioConnection</code></span>](/types/objects/studio-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

Favourite studios

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.studios</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#favourites-studios-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-studios-page}

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.studios</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#favourites-studios-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites-studios-per-page}

The amount of entries per page, max 25

### Returned By

[`ToggleFavourite`](/operations/mutations/toggle-favourite.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`UpdateFavouriteOrder`](/operations/mutations/update-favourite-order.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`User`](/types/objects/user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
