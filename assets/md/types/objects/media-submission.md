Media submission

```graphql
type MediaSubmission {
  id: Int!
  submitter: User
  assignee: User
  status: SubmissionStatus
  submitterStats: Json
  notes: String
  source: String
  changes: [String]
  locked: Boolean
  media: Media
  submission: Media
  characters: [MediaSubmissionComparison]
  staff: [MediaSubmissionComparison]
  studios: [MediaSubmissionComparison]
  relations: [MediaEdge]
  externalLinks: [MediaSubmissionComparison]
  createdAt: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">submitter</code></span>](#submitter)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#submitter}

User submitter of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">assignee</code></span>](#assignee)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#assignee}

Data Mod assigned to handle the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SubmissionStatus</code></span>](/types/enums/submission-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

Status of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">submitterStats</code></span>](#submitter-stats)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Json</code></span>](/types/scalars/json.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#submitter-stats}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#source)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#source}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">changes</code></span>](#changes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#changes}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#locked}

Whether the submission is locked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">submission</code></span>](#submission)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#submission}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSubmissionComparison\]</code></span>](/types/objects/media-submission-comparison.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSubmissionComparison\]</code></span>](/types/objects/media-submission-comparison.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSubmissionComparison\]</code></span>](/types/objects/media-submission-comparison.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">relations</code></span>](#relations)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaEdge\]</code></span>](/types/objects/media-edge.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#relations}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">externalLinks</code></span>](#external-links)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSubmissionComparison\]</code></span>](/types/objects/media-submission-comparison.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#external-links}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmission</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
