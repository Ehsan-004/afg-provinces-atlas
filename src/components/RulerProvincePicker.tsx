'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROVINCES, normalizeId } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';

interface RulerProvincePickerProps {
  hoveredProvinceId: string;
  onHoverProvince: (id: string) => void;
}

export default function RulerProvincePicker({
  hoveredProvinceId,
  onHoverProvince
}: RulerProvincePickerProps) {
  const { language } = useLanguage();
  const router = useRouter();
  const desktopRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mobileRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  
  const [indicatorY, setIndicatorY] = useState(0);
  const [mobileIndicatorX, setMobileIndicatorX] = useState(0);

  // محاسبه موقعیت نشانگر در دسکتاپ و موبایل
  useEffect(() => {
    const target = PROVINCES.find(
      (p) => normalizeId(p.id) === normalizeId(hoveredProvinceId)
    );
    if (!target) return;

    // دسکتاپ
    const deskEl = desktopRefs.current[target.id];
    if (deskEl) {
      setIndicatorY(deskEl.offsetTop + deskEl.offsetHeight / 2 - 4);
      deskEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // موبایل: تنظیم موقعیت نقطه خط‌کش افقی
    const mobEl = mobileRefs.current[target.id];
    if (mobEl) {
      setMobileIndicatorX(mobEl.offsetLeft + mobEl.offsetWidth / 2 - 4);
      mobEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [hoveredProvinceId]);

  return (
    <>
      {/* ۱. خط‌کش عمودی دسکتاپ: ساختار استاندارد و مرتب بدون جابه‌جایی */}
      <div className="hidden lg:flex flex-col h-[70vh] w-52 select-none shrink-0 pl-2">
        <div className="text-zinc-800 font-bold text-xs tracking-wider mb-3 pb-1 border-b border-zinc-200/50">
          {language === 'fa' ? 'انتخاب ولایت' : 'Select Province'}
        </div>

        <div className="relative flex-1 overflow-y-auto custom-ruler-scroll flex flex-row pr-1">
          {/* ستون خط‌کش عمودی مهندسی */}
          <div className="w-5 flex flex-col justify-between py-2 border-l border-zinc-300 relative shrink-0">
            {Array.from({ length: 54 }).map((_, idx) => (
              <div
                key={idx}
                className={`h-[1px] bg-zinc-300 ${
                  idx % 5 === 0 ? 'w-2.5 bg-zinc-500' : 'w-1 bg-zinc-200'
                }`}
              />
            ))}

            {/* نشانگر لغزنده نارنجی */}
            <div
              className="absolute left-0 flex items-center pointer-events-none transition-transform duration-250 ease-out"
              style={{
                transform: `translateY(${indicatorY}px)`,
                top: 0
              }}
            >
              <div className="w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-[#ea580c] ring-2 ring-white shadow-xs" />
              <div className="w-3 h-[2px] bg-[#ea580c]" />
            </div>
          </div>

          {/* لیست نام‌ها */}
          <div className="flex-1 flex flex-col py-1 gap-1.5 pl-3">
            {PROVINCES.map((province) => {
              const isHovered =
                normalizeId(hoveredProvinceId) === normalizeId(province.id);
              const name = language === 'fa' ? province.nameFa : province.nameEn;

              return (
                <div
                  key={province.id}
                  ref={(el) => { desktopRefs.current[province.id] = el; }}
                  onMouseEnter={() => onHoverProvince(province.id)}
                  onClick={() => router.push(`/provinces/${province.slug}`)}
                  className={`h-8 flex items-center justify-between cursor-pointer px-1 rounded transition-colors duration-150 ${
                    isHovered
                      ? 'text-[#ea580c] font-bold'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span className="text-sm tracking-tight truncate">{name}</span>
                  <span
                    className={`text-[11px] font-mono ${
                      isHovered ? 'text-[#ea580c] font-bold' : 'text-zinc-300'
                    }`}
                  >
                    {province.num}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ۲. طراحی موبایل دقیقاً مانند تصویر نمونه: کپسول‌ها + خط‌کش افقی مدرن زیر آن */}
      <div className="lg:hidden w-full flex flex-col gap-2 pt-2 pb-1 shrink-0 bg-[#f7f7f6]">
        {/* ردیف کپسول‌های افقی شیک */}
        <div className="w-full overflow-x-auto custom-ruler-scroll px-3 flex items-center gap-2">
          {PROVINCES.map((province) => {
            const isHovered =
              normalizeId(hoveredProvinceId) === normalizeId(province.id);
            const name = language === 'fa' ? province.nameFa : province.nameEn;

            return (
              <button
                key={province.id}
                ref={(el) => { mobileRefs.current[province.id] = el; }}
                onClick={() => {
                  if (isHovered) {
                    router.push(`/provinces/${province.slug}`);
                  } else {
                    onHoverProvince(province.id);
                  }
                }}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  isHovered
                    ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-md scale-105'
                    : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-400'
                }`}
              >
                <span>{name}</span>
              </button>
            );
          })}
        </div>

        {/* خط‌کش افقی درجه‌بندی‌شده زیر کپسول‌ها همراه با نشانگر نقطه نارنجی */}
        <div className="relative w-full h-4 overflow-hidden flex items-center px-4">
          <div className="w-full flex justify-between items-center h-2 border-b border-zinc-300">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={`w-[1px] bg-zinc-300 ${
                  i % 4 === 0 ? 'h-2.5 bg-zinc-500' : 'h-1.5'
                }`}
              />
            ))}
          </div>
          {/* نقطه نارنجی شناور روی خط‌کش افقی */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#ea580c] ring-2 ring-white shadow-xs transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mobileIndicatorX}px, -50%)`
            }}
          />
        </div>
      </div>
    </>
  );
}