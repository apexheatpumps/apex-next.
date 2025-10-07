
export const metadata = {
  title: 'Apex Next.js 14 App',
  description: 'Starter ready for deployment'
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}