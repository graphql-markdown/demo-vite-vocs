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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">count</code></span>](#count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#count}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#mean-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float!</code></span>](/types/scalars/float.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mean-score}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">standardDeviation</code></span>](#standard-deviation)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float!</code></span>](/types/scalars/float.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#standard-deviation}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">minutesWatched</code></span>](#minutes-watched)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#minutes-watched}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">episodesWatched</code></span>](#episodes-watched)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episodes-watched}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">chaptersRead</code></span>](#chapters-read)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters-read}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">volumesRead</code></span>](#volumes-read)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#volumes-read}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">formats</code></span>](#formats)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserFormatStatistic\]</code></span>](/types/objects/user-format-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#formats}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.formats</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-formats-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-formats-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.formats</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-formats-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-formats-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">statuses</code></span>](#statuses)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatusStatistic\]</code></span>](/types/objects/user-status-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#statuses}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.statuses</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-statuses-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-statuses-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.statuses</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-statuses-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-statuses-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">scores</code></span>](#scores)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserScoreStatistic\]</code></span>](/types/objects/user-score-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#scores}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.scores</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-scores-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-scores-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.scores</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-scores-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-scores-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">lengths</code></span>](#lengths)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserLengthStatistic\]</code></span>](/types/objects/user-length-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#lengths}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.lengths</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-lengths-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-lengths-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.lengths</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-lengths-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-lengths-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">releaseYears</code></span>](#release-years)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserReleaseYearStatistic\]</code></span>](/types/objects/user-release-year-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#release-years}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.releaseYears</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-release-years-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-release-years-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.releaseYears</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-release-years-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-release-years-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">startYears</code></span>](#start-years)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStartYearStatistic\]</code></span>](/types/objects/user-start-year-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#start-years}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.startYears</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-start-years-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-start-years-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.startYears</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-start-years-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-start-years-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">genres</code></span>](#genres)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserGenreStatistic\]</code></span>](/types/objects/user-genre-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#genres}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.genres</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-genres-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-genres-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.genres</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-genres-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-genres-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">tags</code></span>](#tags)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserTagStatistic\]</code></span>](/types/objects/user-tag-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#tags}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.tags</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-tags-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-tags-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.tags</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-tags-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-tags-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">countries</code></span>](#countries)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserCountryStatistic\]</code></span>](/types/objects/user-country-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#countries}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.countries</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-countries-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-countries-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.countries</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-countries-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-countries-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#voice-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserVoiceActorStatistic\]</code></span>](/types/objects/user-voice-actor-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actors}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.voiceActors</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-voice-actors-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-voice-actors-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-voice-actors-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-voice-actors-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStaffStatistic\]</code></span>](/types/objects/user-staff-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-staff-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-staff-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-staff-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-staff-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStudioStatistic\]</code></span>](/types/objects/user-studio-statistic.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#user-statistics-studios-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-statistics-studios-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#user-statistics-studios-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserStatisticsSort\]</code></span>](/types/enums/user-statistics-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-statistics-studios-sort}

### Member Of

[`UserStatisticTypes`](/types/objects/user-statistic-types.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
