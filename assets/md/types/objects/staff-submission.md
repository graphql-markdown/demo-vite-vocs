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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

Staff that the submission is referencing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">submission</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

The staff submission changes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">submitter</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

Submitter for the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">assignee</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

Data Mod assigned to handle the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SubmissionStatus</code></span>](/types/enums/submission-status.mdx) :badge[enum]

Status of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Inner details of submission status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Whether the submission is locked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffSubmission</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

### Member Of

[`CharacterSubmissionEdge`](/types/objects/character-submission-edge.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]
