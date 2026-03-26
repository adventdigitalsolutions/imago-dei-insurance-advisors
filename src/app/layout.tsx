import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const leagueSpartan = League_Spartan({
  variable: '--font-brand',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Imago Dei Insurance Advisors',
  description: 'Imago Dei Insurance Advisors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} font-montserrat antialiased w-full`}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
