A user's statistics

```graphql
type UserStats {
  watchedTime: Int
  chaptersRead: Int
  activityHistory: [UserActivityHistory]
  animeStatusDistribution: [StatusDistribution]
  mangaStatusDistribution: [StatusDistribution]
  animeScoreDistribution: [ScoreDistribution]
  mangaScoreDistribution: [ScoreDistribution]
  animeListScores: ListScoreStats
  mangaListScores: ListScoreStats
  favouredGenresOverview: [GenreStats]
  favouredGenres: [GenreStats]
  favouredTags: [TagStats]
  favouredActors: [StaffStats]
  favouredStaff: [StaffStats]
  favouredStudios: [StudioStats]
  favouredYears: [YearStats]
  favouredFormats: [FormatStats]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">watchedTime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of anime the user has watched in minutes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">chaptersRead</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of manga chapters the user has read

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">activityHistory</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserActivityHistory\]</code></span>](/types/objects/user-activity-history.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeStatusDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaStatusDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeScoreDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaScoreDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeListScores</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ListScoreStats</code></span>](/types/objects/list-score-stats.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaListScores</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ListScoreStats</code></span>](/types/objects/list-score-stats.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredGenresOverview</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[GenreStats\]</code></span>](/types/objects/genre-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredGenres</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[GenreStats\]</code></span>](/types/objects/genre-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredTags</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[TagStats\]</code></span>](/types/objects/tag-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffStats\]</code></span>](/types/objects/staff-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredStaff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffStats\]</code></span>](/types/objects/staff-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredStudios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioStats\]</code></span>](/types/objects/studio-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredYears</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[YearStats\]</code></span>](/types/objects/year-stats.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredFormats</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[FormatStats\]</code></span>](/types/objects/format-stats.mdx) :badge[list] :badge[object]

### Member Of

[`User`](/types/objects/user.mdx)  :badge[object]
