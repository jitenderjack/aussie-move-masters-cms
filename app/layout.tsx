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
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-teal-600">
                Aussie Move Masters
              </span>
            </div>
            <a
              href="tel:0414910000"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Call: 0414 910 000
            </a>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-2xl font-bold mb-4">Aussie Move Masters</h3>
            <p className="text-gray-400 mb-4">
              Professional Removalists Serving Perth
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <a href="tel:0414910000" className="hover:text-teal-400 transition-colors">
                0414 910 000
              </a>
              <a href="mailto:info@aussiemovemasters.com.au" className="hover:text-teal-400 transition-colors">
                info@aussiemovemasters.com.au
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aussie Move Masters. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
