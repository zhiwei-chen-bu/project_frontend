import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'WordDee.ai',
  description: 'Learn English with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        {/* Navbar */}
        <nav className="bg-white sticky top-0 z-50">
          <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
            <div className="font-bold text-xl text-black tracking-tight flex items-center gap-1">
              worddee.ai
            </div>

            <div className="flex-1 flex justify-center space-x-8 text-[15px] text-gray-500 font-medium">
              <a href="/dashboard" className="text-[#0F766E] font-semibold border-b-2 border-transparent hover:border-[#0F766E] transition-colors">My Progress</a>
              <a href="/word-of-the-day" className="hover:text-[#0F766E] transition-colors">Word of the Day</a>
            </div>

            <div className="w-9 h-9 bg-white border-2 border-[#14B8A6] rounded-full flex items-center justify-center text-[#14B8A6]">
              {/* User Icon SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}