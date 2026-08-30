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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">anime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Favourite anime

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.anime</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.anime</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">manga</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Favourite manga

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.manga</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.manga</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) :badge[object]

Favourite characters

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffConnection</code></span>](/types/objects/staff-connection.mdx) :badge[object]

Favourite staff

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StudioConnection</code></span>](/types/objects/studio-connection.mdx) :badge[object]

Favourite studios

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.studios</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Favourites.studios</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

### Returned By

[`ToggleFavourite`](/operations/mutations/toggle-favourite.mdx)  :badge[mutation]<Bullet />[`UpdateFavouriteOrder`](/operations/mutations/update-favourite-order.mdx)  :badge[mutation]

### Member Of

[`User`](/types/objects/user.mdx)  :badge[object]
