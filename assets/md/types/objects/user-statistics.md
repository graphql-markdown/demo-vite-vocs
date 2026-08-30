No description

```graphql
type UserStatistics {
  count: Int!
  meanScore: Float!
  standardDeviation: Float!
  minutesWatched: Int!
  episodesWatched: Int!
  chaptersRead: Int!
  volumesRead: Int!
  formats(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserFormatStatistic]
  statuses(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStatusStatistic]
  scores(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserScoreStatistic]
  lengths(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserLengthStatistic]
  releaseYears(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserReleaseYearStatistic]
  startYears(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStartYearStatistic]
  genres(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserGenreStatistic]
  tags(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserTagStatistic]
  countries(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserCountryStatistic]
  voiceActors(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserVoiceActorStatistic]
  staff(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStaffStatistic]
  studios(
    limit: Int
    sort: [UserStatisticsSort]
  ): [UserStudioStatistic]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">count</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float!</code></span>](/types/scalars/float.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">standardDeviation</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float!</code></span>](/types/scalars/float.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">minutesWatched</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">episodesWatched</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">chaptersRead</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">volumesRead</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">formats</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserFormatStatistic\]</code></span>](/types/objects/user-format-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.formats</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.formats</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">statuses</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatusStatistic\]</code></span>](/types/objects/user-status-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.statuses</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.statuses</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">scores</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserScoreStatistic\]</code></span>](/types/objects/user-score-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.scores</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.scores</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">lengths</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserLengthStatistic\]</code></span>](/types/objects/user-length-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.lengths</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.lengths</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">releaseYears</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserReleaseYearStatistic\]</code></span>](/types/objects/user-release-year-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.releaseYears</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.releaseYears</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">startYears</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStartYearStatistic\]</code></span>](/types/objects/user-start-year-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.startYears</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.startYears</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">genres</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserGenreStatistic\]</code></span>](/types/objects/user-genre-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.genres</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.genres</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">tags</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserTagStatistic\]</code></span>](/types/objects/user-tag-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.tags</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.tags</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">countries</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserCountryStatistic\]</code></span>](/types/objects/user-country-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.countries</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.countries</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserVoiceActorStatistic\]</code></span>](/types/objects/user-voice-actor-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.voiceActors</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStaffStatistic\]</code></span>](/types/objects/user-staff-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStudioStatistic\]</code></span>](/types/objects/user-studio-statistic.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) :badge[list] :badge[enum]

### Member Of

[`UserStatisticTypes`](/types/objects/user-statistic-types.mdx)  :badge[object]
