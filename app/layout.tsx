import type { Metadata } from 'next';
import { Open_Sans as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const font = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Adigun Samuel',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          font.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
