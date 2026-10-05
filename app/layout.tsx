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
    default: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
    template: '%s | Veytrix Tech',
  },
  description:
    'Veytrix Tech is a digital product and technology studio specializing in UI/UX design, modern web development, cross-platform mobile apps, and custom AI solutions.',
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.domain }],
  generator: 'Next.js',
  keywords: [
    'UI/UX Design',
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'Digital Products',
    'Veytrix Tech',
    'Flutter Studio',
    'Next.js Studio',
    'Design Systems',
  ],
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
    description:
      'Veytrix Tech is a digital product and technology studio specializing in UI/UX design, modern web development, cross-platform mobile apps, and custom AI solutions.',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
    description:
      'Veytrix Tech is a digital product and technology studio specializing in UI/UX design, modern web development, cross-platform mobile apps, and custom AI solutions.',
    images: [`${SITE_CONFIG.domain}/opengraph-image`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/apple-touch-icon.png',
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
  // JSON-LD structured data for Organization and WebSite per Technical SEO standards
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.domain,
        logo: `${SITE_CONFIG.domain}/brand/logo.png`,
        description:
          'A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.',
        email: SITE_CONFIG.email,
        sameAs: ['https://github.com/malleshchavan3112/veytrix-tech'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.name,
        description:
          'Veytrix Tech is a digital product and technology studio specializing in UI/UX design, modern web development, cross-platform mobile apps, and custom AI solutions.',
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
    ],
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
