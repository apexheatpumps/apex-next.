import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCall } from '@/components/FloatingCall';
import { Analytics } from '@vercel/analytics/react';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';

export const metadata: Metadata = {
  title: 'Apex Heat Pumps | Heat Pump Contractor Vancouver',
  description: 'CleanBC & HPCN certified contractor. Up to $24,500 rebates. Call 604-442-6711.',
  openGraph: {
    title: 'Apex Heat Pumps | Vancouver',
    description: 'CleanBC & HPCN certified contractor. Up to $24,500 rebates.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://apexheatpumps.ca',
    siteName: 'Apex Heat Pumps',
    type: 'website',
    locale: 'en_CA'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Heat Pumps | Vancouver',
    description: 'Heat pump installs and retrofits in Vancouver.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCall />
        <Analytics />
      </body>
    </html>
  );
}
