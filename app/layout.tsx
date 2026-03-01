import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GRYF Volleyball Camp — Dębica 2026',
  description:
    'Półkolonie siatkarskie GRYF VOLLEYBALL CAMP w Dębicy. Trenuj z zawodniczkami Tauron Ligi! 29.06–04.07.2026.',
  keywords: ['siatkówka', 'volleyball', 'camp', 'Dębica', 'GRYF', 'półkolonie', 'Tauron Liga'],
  icons: { icon: '/assets/logo_no_background.PNG' },
  openGraph: {
    title: 'GRYF Volleyball Camp — Dębica 2026',
    description: 'Półkolonie siatkarskie z zawodniczkami Tauron Ligi!',
    type: 'website',
    images: [{ url: '/assets/logo_main.png', alt: 'GRYF Volleyball Camp' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-accent-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Przejdź do treści głównej
        </a>
        {children}
      </body>
    </html>
  );
}
