'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PROVINCES, ProvinceData } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';
import MiniProvinceMap from '@/components/MiniProvinceMap';
import DistrictsDrawer from '@/components/DistrictsDrawer';
import ProvinceAutoGallery from '@/components/ProvinceAutoGallery';
import { ArrowRight, ChevronRight, ChevronLeft, Plus } from 'lucide-react';

export default function ProvinceDetailPage() {
  const params = useParams();
  const { language } = useLanguage();
  const slug = params?.slug as string;

  const initialIndex = PROVINCES.findIndex(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );
  const [activeIdx, setActiveIdx] = useState<number>(initialIndex !== -1 ? initialIndex : 0);
  const [isDistrictsOpen, setIsDistrictsOpen] = useState(false);
  
  // متغیرهای انیمیشن اسلاید بین استان‌ها
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  // متغیرهای لمس با انگشت
  const touchStartX = useRef<number | null>(null);

  const province: ProvinceData = PROVINCES[activeIdx] || PROVINCES[0];

  const changeProvince = (newIndex: number, direction: 'left' | 'right') => {
    if (isSliding) return;
    setSlideDirection(direction);
    setIsSliding(true);

    setTimeout(() => {
      setActiveIdx(newIndex);
      window.history.replaceState(null, '', `/provinces/${PROVINCES[newIndex].slug}`);
      setSlideDirection(null);
      setIsSliding(false);
    }, 280);
  };

  // رفتن به استان بعدی (در جهت فارسی: اسلاید به راست)
  const goToNextProvince = () => {
    const next = (activeIdx + 1) % PROVINCES.length;
    changeProvince(next, 'left');
  };

  // رفتن به استان قبلی
  const goToPrevProvince = () => {
    const prev = (activeIdx - 1 + PROVINCES.length) % PROVINCES.length;
    changeProvince(prev, 'right');
  };

  // هندل کلیدهای کیبورد
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToNextProvince();
      if (e.key === 'ArrowRight') goToPrevProvince();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, isSliding]);

  // سوایپ با انگشت روی موبایل
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToPrevProvince();
      } else {
        goToNextProvince();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen overflow-hidden bg-[#e5e5e4] flex flex-col justify-center items-center select-none"
    >
      {/* دکمه شناور مشکی «بازگشت به نقشه» - ثابت در بالا سمت راست */}
      <div className="fixed top-5 right-5 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950/90 hover:bg-black text-white text-xs font-bold shadow-lg backdrop-blur-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>{language === 'fa' ? 'بازگشت به نقشه' : 'Back to map'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* دکمه‌های شناور تعویض استان در موبایل و دسکتاپ */}
      <div className="fixed top-1/2 -translate-y-1/2 left-3 sm:left-6 z-40">
        <button
          onClick={goToNextProvince}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 cursor-pointer border border-zinc-200"
          title={language === 'fa' ? 'ولایت بعدی' : 'Next Province'}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="fixed top-1/2 -translate-y-1/2 right-3 sm:right-6 z-40">
        <button
          onClick={goToPrevProvince}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 cursor-pointer border border-zinc-200"
          title={language === 'fa' ? 'ولایت قبلی' : 'Previous Province'}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* محفظه کاروسل اصلی با انیمیشن اسلاید افقی */}
      <main className="w-full h-full max-w-[1340px] flex flex-col lg:flex-row items-center justify-center p-3 sm:p-6 lg:p-8 gap-4 sm:gap-6 overflow-hidden">
        
        {/* ۱. کارت گالری تصویر با اسلایدر خودکار و زوم Ken Burns */}
        <div
          className={`w-full lg:w-[48%] h-64 sm:h-80 lg:h-[85vh] shrink-0 transition-all duration-300 ease-out ${
            slideDirection === 'left'
              ? 'opacity-30 -translate-x-12 scale-95'
              : slideDirection === 'right'
              ? 'opacity-30 translate-x-12 scale-95'
              : 'opacity-100 translate-x-0 scale-100'
          }`}
        >
          <ProvinceAutoGallery images={province.images} />
        </div>

        {/* ۲. پنل کتان/خاکی مشخصات ولایت با انیمیشن اسلاید هماهنگ */}
        <div
          className={`w-full lg:w-[38%] h-auto lg:h-[85vh] bg-[#c3a878] text-[#1c1917] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative shrink-0 transition-all duration-300 ease-out ${
            slideDirection === 'left'
              ? 'opacity-30 translate-x-12 scale-95'
              : slideDirection === 'right'
              ? 'opacity-30 -translate-x-12 scale-95'
              : 'opacity-100 translate-x-0 scale-100'
          }`}
        >
          {/* ردیف آمار بالای پنل: شماره، مساحت، جمعیت */}
          <div className="flex items-start justify-between w-full border-b border-[#a88d5e]/50 pb-3">
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-[#3d3326]">
              <span>{province.num}</span>
              <span className="w-6 h-[1.5px] bg-[#3d3326]" />
              <span>{PROVINCES.length}</span>
            </div>

            <div className="flex items-center gap-6 text-left">
              <div>
                <span className="text-[11px] block text-[#4d4030] font-medium">
                  {language === 'fa' ? 'جمعیت' : 'Population'}
                </span>
                <span className="text-lg sm:text-xl font-black text-black">
                  {province.population}
                </span>
              </div>

              <div>
                <span className="text-[11px] block text-[#4d4030] font-medium">
                  {language === 'fa' ? 'مساحت (km²)' : 'Area (km²)'}
                </span>
                <span className="text-lg sm:text-xl font-black text-black">
                  {province.areaKm2.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* نقشه مینیاتوری افغانستان با هایلایت مشکی موقعیت ولایت */}
          <div className="my-auto py-2">
            <MiniProvinceMap provinceId={province.id} />
          </div>

          {/* نام بزرگ ولایت و معرفی */}
          <div className="flex flex-col gap-1.5">
            <div className="text-xs font-bold text-[#423729]">
              {language === 'fa'
                ? `${province.regionFa} • مرکز: ${province.capitalFa}`
                : `${province.regionEn} • Capital: ${province.capitalEn}`}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-none">
              {language === 'fa' ? province.nameFa : province.nameEn}
            </h1>

            <p className="text-xs sm:text-sm text-[#382f23] leading-relaxed mt-1 text-justify">
              {language === 'fa' ? province.descriptionFa : province.descriptionEn}
            </p>
          </div>

          {/* فوتر پنل: مختصات و دکمه دایره‌ای + معرفی ولسوالی‌ها */}
          <div className="flex items-end justify-between pt-4 border-t border-[#a88d5e]/50 mt-2">
            <div className="flex flex-col text-[11px] font-mono text-[#4a3e2e]">
              <span className="font-bold">
                {province.coordinates.lat} {province.coordinates.lng}
              </span>
              <span className="text-[10px] opacity-80 mt-0.5">
                {language === 'fa' ? 'اطلس جغرافیای افغانستان' : 'Atlas of Afghanistan'}
              </span>
            </div>

            {/* دکمه دایره‌ای تعاملی معرفی ولسوالی‌ها */}
            <button
              onClick={() => setIsDistrictsOpen(true)}
              className="relative w-14 h-14 rounded-full border border-[#3b3224]/40 hover:border-black flex items-center justify-center group transition-all cursor-pointer hover:scale-105 active:scale-95"
              title={language === 'fa' ? 'مشاهده فهرست ولسوالی‌ها' : 'View districts'}
            >
              <Plus className="w-5 h-5 text-black transition-transform group-hover:rotate-90 duration-300" />
              <span className="absolute -bottom-5 text-[9px] font-bold text-black tracking-tighter whitespace-nowrap">
                {language === 'fa' ? 'معرفی ولسوالی‌ها' : 'Explore Districts'}
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* کشوی مودال با انیمیشن روان Slide-Up */}
      <DistrictsDrawer
        province={province}
        isOpen={isDistrictsOpen}
        onClose={() => setIsDistrictsOpen(false)}
      />
    </div>
  );
}