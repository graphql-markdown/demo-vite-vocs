// Vocs layout slots: Vocs injects the components exported from
// `pages/_slots.tsx` into its layout. This file sits next to the generated docs
// and survives `npm run doc`; it is tracked with `git add -f` like `.gitkeep`
// (`docs/` is ignored).

const link = { textDecoration: 'underline', textUnderlineOffset: '2px' }

export function Footer() {
  return (
    <p
      style={{
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(127, 127, 127, 0.25)',
        fontSize: '0.875rem',
        opacity: 0.8,
      }}
    >
      Generated with <a href="https://graphql-markdown.dev" style={link}>GraphQL-Markdown</a>
      {' · '}
      <a href="https://github.com/graphql-markdown/graphql-markdown" style={link}>⭐ Star on GitHub</a>
    </p>
  )
}
