export const metadata = {
  title: 'Apex Next',
  description: 'Next.js 14 Starter App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
