Type of relation media has to its parent.

```graphql
enum MediaRelation {
  ADAPTATION
  PREQUEL
  SEQUEL
  PARENT
  SIDE_STORY
  CHARACTER
  SUMMARY
  ALTERNATIVE
  SPIN_OFF
  OTHER
  SOURCE
  COMPILATION
  CONTAINS
  SAME_UNIVERSE
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">ADAPTATION</code></span>](#adaptation) \{#adaptation}

An adaption of this media into a different format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">PREQUEL</code></span>](#prequel) \{#prequel}

Released before the relation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SEQUEL</code></span>](#sequel) \{#sequel}

Released after the relation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">PARENT</code></span>](#parent) \{#parent}

The media a side story is from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SIDE\_STORY</code></span>](#side-story) \{#side-story}

A side story of the parent media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">CHARACTER</code></span>](#character) \{#character}

Shares at least 1 character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SUMMARY</code></span>](#summary) \{#summary}

A shortened and summarized version

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">ALTERNATIVE</code></span>](#alternative) \{#alternative}

An alternative version of the same media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SPIN\_OFF</code></span>](#spin-off) \{#spin-off}

An alternative version of the media with a different primary focus

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">OTHER</code></span>](#other) \{#other}

Other

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SOURCE</code></span>](#source) \{#source}

Version 2 only. The source material the media was adapted from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">COMPILATION</code></span>](#compilation) \{#compilation}

Version 2 only.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">CONTAINS</code></span>](#contains) \{#contains}

Version 2 only.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SAME\_UNIVERSE</code></span>](#same-universe) \{#same-universe}

Version 3 only. The media is set in the same universe as another media

### Member Of

[`MediaEdge`](/types/objects/media-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
