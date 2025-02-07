import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../app/layout/Navbar';
import './theme-config.css'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});


export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`} >
        <Theme accentColor="tomato" radius="large">
          <Navbar />
          <main className="p-5">
            {children}
          </main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
