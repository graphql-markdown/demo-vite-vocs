CharacterSubmission connection edge

```graphql
type CharacterSubmissionEdge {
  node: CharacterSubmission
  role: CharacterRole
  voiceActors: [Staff]
  submittedVoiceActors: [StaffSubmission]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterSubmission</code></span>](/types/objects/character-submission.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) :badge[enum]

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) :badge[list] :badge[object]

The voice actors of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">submittedVoiceActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSubmission\]</code></span>](/types/objects/staff-submission.mdx) :badge[list] :badge[object]

The submitted voice actors of the character

### Member Of

[`CharacterSubmissionConnection`](/types/objects/character-submission-connection.mdx)  :badge[object]
