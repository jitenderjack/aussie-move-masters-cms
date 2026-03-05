import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aussie Move Masters - Professional Removalists Perth',
  description: 'Perth\'s most trusted removalists. Professional, affordable, and reliable moving services across Perth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
