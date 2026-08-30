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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">ADAPTATION</code></span>](#)

An adaption of this media into a different format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">PREQUEL</code></span>](#)

Released before the relation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SEQUEL</code></span>](#)

Released after the relation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">PARENT</code></span>](#)

The media a side story is from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SIDE\_STORY</code></span>](#)

A side story of the parent media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">CHARACTER</code></span>](#)

Shares at least 1 character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SUMMARY</code></span>](#)

A shortened and summarized version

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">ALTERNATIVE</code></span>](#)

An alternative version of the same media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SPIN\_OFF</code></span>](#)

An alternative version of the media with a different primary focus

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">OTHER</code></span>](#)

Other

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SOURCE</code></span>](#)

Version 2 only. The source material the media was adapted from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">COMPILATION</code></span>](#)

Version 2 only.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">CONTAINS</code></span>](#)

Version 2 only.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRelation</code>.<code className="gqlmd-mdx-entity-name">SAME\_UNIVERSE</code></span>](#)

Version 3 only. The media is set in the same universe as another media

### Member Of

[`MediaEdge`](/types/objects/media-edge.mdx)  :badge[object]
