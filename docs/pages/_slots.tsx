// Vocs layout slots: Vocs injects the components exported from
// `pages/_slots.tsx` into its layout. This file sits next to the generated docs
// and survives `npm run doc`; it is tracked with `git add -f` like `.gitkeep`
// (`docs/` is ignored).

const link = { textDecoration: 'underline', textUnderlineOffset: '2px' }

// Keep the footer at the bottom of the viewport on short pages: stretch the
// layout's <main> to the screen height and let the article take the extra
// space (long pages are unchanged).
const stickToBottom = `
main:has(> footer) { display: flex; flex-direction: column; min-height: 100vh; }
main:has(> footer) > article { flex-grow: 1; }
`

export function Footer() {
  return (
    <>
      <style>{stickToBottom}</style>
      <p
        style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(127, 127, 127, 0.25)',
          fontSize: '0.875rem',
          textAlign: 'center',
          opacity: 0.8,
        }}
      >
        Generated with <a href="https://graphql-markdown.dev" style={link}>GraphQL-Markdown</a>
        {' · '}
        <a href="https://github.com/graphql-markdown/graphql-markdown" style={link}>⭐ Star on GitHub</a>
      </p>
    </>
  )
}
