import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazir',
});

export const metadata: Metadata = {
  title: 'اطلس تعاملی ولایت‌های افغانستان | Afghanistan Provinces Atlas',
  description: 'نقشه وکتور تعاملی و مدرن ولایت‌ها و ولسوالی‌های افغانستان',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="min-h-screen flex flex-col bg-[#fbfbfa] text-zinc-900 selection:bg-zinc-200">
        <LanguageProvider>
          {/* <Header /> */}
          <div className="flex-1 flex flex-col">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}