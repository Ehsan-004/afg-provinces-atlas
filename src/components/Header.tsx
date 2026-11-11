'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, Globe } from 'lucide-react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-zinc-200/80 bg-[#fbfbfa]/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* برند و لوگوتایپ مدرن */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 text-zinc-50 flex items-center justify-center transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-zinc-900 tracking-tight text-base sm:text-lg leading-tight">
              {t.siteTitle}
            </span>
            <span className="text-xs text-zinc-500 font-normal hidden sm:inline-block">
              {t.siteSubtitle}
            </span>
          </div>
        </Link>

        {/* سوییچ زبان مینیمال */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-200 hover:border-zinc-300 bg-white/70 hover:bg-zinc-100/70 text-xs font-medium text-zinc-700 transition-colors"
            title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span className="uppercase tracking-wider font-semibold">
              {language === 'fa' ? 'English' : 'دری / فارسی'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}