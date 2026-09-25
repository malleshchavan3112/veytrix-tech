import type { Metadata, Viewport } from 'next';
import { Geist, Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { SITE_CONFIG } from '@/lib/constants/site';
import { SkipLink } from '@/components/ui/skip-link';
import { GlobalHeader } from '@/components/organisms/global-header';
import { GlobalFooter } from '@/components/organisms/global-footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: 'Veytrix Tech — Design + Technology + Product Thinking',
    template: '%s | Veytrix Tech',
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.domain }],
  generator: 'Next.js',
  keywords: [
    'Digital Product Studio',
    'Full-Stack Web Development',
    'Mobile App Development',
    'Flutter Studio',
    'Next.js Studio',
    'UI/UX Design Systems',
    'Custom Software Engineering',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Veytrix Tech — Design + Technology + Product Thinking',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veytrix Tech — Design + Technology + Product Thinking',
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#FBFBFD',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/branding/veytrix-logo.png`,
    description: SITE_CONFIG.description,
    knowsAbout: [
      'Web Application Development',
      'Mobile App Development',
      'UI/UX Design',
      'Custom Software Engineering',
      'Artificial Intelligence Solutions',
      'Design Systems',
    ],
    priceRange: '$$$$',
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-canvas-base text-content-primary antialiased min-h-screen flex flex-col">
        <SkipLink targetId="main-content" />
        <GlobalHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
