import '../src/legacy/style.css'

export const metadata = {
  title: 'Makanin — Good food. Good mood.',
  description: 'Makanin restaurant frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
