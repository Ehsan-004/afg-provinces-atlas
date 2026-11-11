'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, MapPin, ArrowUpRight } from 'lucide-react';
import { PROVINCES } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';

interface ProvinceSidebarProps {
  hoveredProvinceId: string | null;
  onHoverProvince: (id: string | null) => void;
}

export default function ProvinceSidebar({
  hoveredProvinceId,
  onHoverProvince
}: ProvinceSidebarProps) {
  const { language, t, isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // فیلتر کردن استان‌ها بر اساس زبان و عبارت جستجو
  const filteredProvinces = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return PROVINCES;
    return PROVINCES.filter((p) => {
      const matchFa = p.nameFa.toLowerCase().includes(q) || p.capitalFa.toLowerCase().includes(q);
      const matchEn = p.nameEn.toLowerCase().includes(q) || p.capitalEn.toLowerCase().includes(q);
      return matchFa || matchEn;
    });
  }, [searchQuery]);

  return (
    <aside className="w-full lg:w-96 flex flex-col h-full bg-white/70 border-zinc-200/80 border-r lg:border-r border-y-0 border-l-0">
      {/* بخش سرچ و خلاصه بالا */}
      <div className="p-4 border-b border-zinc-100 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
            {t.provincesCount}
          </span>
          <span className="text-xs text-zinc-400">
            {filteredProvinces.length} / {PROVINCES.length}
          </span>
        </div>

        <div className="relative">
          <Search className={`w-4 h-4 text-zinc-400 absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full py-2 bg-zinc-50/80 hover:bg-zinc-50 focus:bg-white text-zinc-800 text-xs border border-zinc-200 rounded-lg outline-none focus:border-zinc-400 transition-colors ${
              isRtl ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'
            }`}
          />
        </div>
      </div>

      {/* لیست اسکرول‌پذیر ولایت‌ها */}
      <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 p-2 space-y-1">
        {filteredProvinces.length === 0 ? (
          <div className="py-12 text-center text-xs text-zinc-400">
            {t.noResults}
          </div>
        ) : (
          filteredProvinces.map((province) => {
            const isHovered = hoveredProvinceId === province.id;
            const name = language === 'fa' ? province.nameFa : province.nameEn;
            const capital = language === 'fa' ? province.capitalFa : province.capitalEn;

            return (
              <div
                key={province.id}
                onMouseEnter={() => onHoverProvince(province.id)}
                onMouseLeave={() => onHoverProvince(null)}
                className={`group rounded-lg p-2.5 transition-all flex items-center justify-between ${
                  isHovered ? 'bg-zinc-100/90 text-zinc-950' : 'hover:bg-zinc-50 text-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isHovered ? 'bg-zinc-800 scale-125' : 'bg-zinc-300'
                    }`}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-none text-zinc-900">
                      {name}
                    </span>
                    <span className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-zinc-400" />
                      {capital}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/provinces/${province.slug}`}
                  className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs text-zinc-800 font-medium px-2 py-1 rounded bg-zinc-200/60 hover:bg-zinc-200 transition-all"
                  title={t.viewDetails}
                >
                  <span className="text-[11px]">{t.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}