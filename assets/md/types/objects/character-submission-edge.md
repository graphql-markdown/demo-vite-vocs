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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#node)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterSubmission</code></span>](/types/objects/character-submission.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#node}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#role}

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#voice-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actors}

The voice actors of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">submittedVoiceActors</code></span>](#submitted-voice-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSubmission\]</code></span>](/types/objects/staff-submission.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#submitted-voice-actors}

The submitted voice actors of the character

### Member Of

[`CharacterSubmissionConnection`](/types/objects/character-submission-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
