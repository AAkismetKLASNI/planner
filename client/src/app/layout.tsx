import { Providers } from './providers';
import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import { Toaster } from 'sonner';
import { SITE_NAME } from '@/constants/seo.constants';
import './globals.scss';

const geologica = Geologica({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-noto-sans',
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: 'Best one for planning from reflection-planner',
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${geologica.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
