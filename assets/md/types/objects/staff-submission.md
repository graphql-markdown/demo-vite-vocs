A submission for a staff that features in an anime or manga

```graphql
type StaffSubmission {
  id: Int!
  staff: Staff
  submission: Staff
  submitter: User
  assignee: User
  status: SubmissionStatus
  notes: String
  source: String
  locked: Boolean
  createdAt: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

Staff that the submission is referencing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">submission</code></span>](#submission)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#submission}

The staff submission changes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">submitter</code></span>](#submitter)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#submitter}

Submitter for the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">assignee</code></span>](#assignee)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#assignee}

Data Mod assigned to handle the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SubmissionStatus</code></span>](/types/enums/submission-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

Status of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#notes}

Inner details of submission status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#source)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#source}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#locked}

Whether the submission is locked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

### Member Of

[`CharacterSubmissionEdge`](/types/objects/character-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
