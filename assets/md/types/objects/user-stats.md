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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">watchedTime</code></span>](#watched-time)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#watched-time}

The amount of anime the user has watched in minutes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">chaptersRead</code></span>](#chapters-read)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters-read}

The amount of manga chapters the user has read

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">activityHistory</code></span>](#activity-history)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserActivityHistory\]</code></span>](/types/objects/user-activity-history.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#activity-history}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeStatusDistribution</code></span>](#anime-status-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime-status-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaStatusDistribution</code></span>](#manga-status-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga-status-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeScoreDistribution</code></span>](#anime-score-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime-score-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaScoreDistribution</code></span>](#manga-score-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga-score-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">animeListScores</code></span>](#anime-list-scores)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ListScoreStats</code></span>](/types/objects/list-score-stats.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime-list-scores}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">mangaListScores</code></span>](#manga-list-scores)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ListScoreStats</code></span>](/types/objects/list-score-stats.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga-list-scores}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredGenresOverview</code></span>](#favoured-genres-overview)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[GenreStats\]</code></span>](/types/objects/genre-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-genres-overview}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredGenres</code></span>](#favoured-genres)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[GenreStats\]</code></span>](/types/objects/genre-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-genres}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredTags</code></span>](#favoured-tags)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[TagStats\]</code></span>](/types/objects/tag-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-tags}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredActors</code></span>](#favoured-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffStats\]</code></span>](/types/objects/staff-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-actors}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredStaff</code></span>](#favoured-staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffStats\]</code></span>](/types/objects/staff-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-staff}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredStudios</code></span>](#favoured-studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioStats\]</code></span>](/types/objects/studio-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-studios}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredYears</code></span>](#favoured-years)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[YearStats\]</code></span>](/types/objects/year-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-years}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStats</code>.<code className="gqlmd-mdx-entity-name">favouredFormats</code></span>](#favoured-formats)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[FormatStats\]</code></span>](/types/objects/format-stats.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#favoured-formats}

### Member Of

[`User`](/types/objects/user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
