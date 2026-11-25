# ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

```graphql
scalar ID
```

## Member Of

[`archiveProject`](/operations/mutations/archive-project.mdx)  :badge[mutation]<Bullet />[`createFolder`](/operations/mutations/create-folder.mdx)  :badge[mutation]<Bullet />[`CreateProjectInput`](/types/inputs/create-project-input.mdx)  :badge[input]<Bullet />[`folder`](/operations/queries/folder.mdx)  :badge[query]<Bullet />[`Folder`](/types/objects/folder.mdx)  :badge[object]<Bullet />[`folderCreated`](/operations/subscriptions/folder-created.mdx)  :badge[subscription]<Bullet />[`LegacyProject`](/types/objects/legacy-project.mdx)  :badge[object]<Bullet />[`Node`](/types/interfaces/node.mdx)  :badge[interface]<Bullet />[`Project`](/types/objects/project.mdx)  :badge[object]<Bullet />[`projectChanged`](/operations/subscriptions/project-changed.mdx)  :badge[subscription]<Bullet />[`User`](/types/objects/user.mdx)  :badge[object]

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/types/scalars/id.md)
