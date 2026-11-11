'use client';

import React, { useState, useEffect } from 'react';
import AfghanistanMap from '@/components/AfghanistanMap';
import RulerProvincePicker from '@/components/RulerProvincePicker';
import { getProvinceById, PROVINCES, ProvinceData } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, ArrowUpRight, Users, Layers, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string>('AFKAB');
  const [isClient, setIsClient] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activeProvince: ProvinceData =
    getProvinceById(hoveredProvinceId) || PROVINCES[0];

  if (!isClient) {
    return <div className="w-screen h-screen bg-[#f7f7f6]" />;
  }

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#f7f7f6] flex flex-col justify-between px-4 sm:px-8 lg:px-14 py-3 sm:py-5 select-none">
      
      {/* هدر ثابت بالا: مختصات و سوییچ زبان */}
      <header className="w-full h-10 flex items-center justify-between shrink-0 border-b border-zinc-200/60 pb-2">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="font-bold text-zinc-900">
            {language === 'fa' ? activeProvince.nameFa : activeProvince.nameEn}
          </span>
          <span className="text-[#ea580c] font-semibold">
            {activeProvince.coordinates.lat} {activeProvince.coordinates.lng}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <span>{language === 'fa' ? 'افغانستان' : 'Afghanistan'}</span>
            <span>•</span>
            <span>۶۵۲,۸۶۴ {language === 'fa' ? 'کیلومتر مربع' : 'km²'}</span>
            <span>•</span>
            <span>{language === 'fa' ? '۳۴ ولایت' : '34 Provinces'}</span>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-semibold text-zinc-800 shadow-2xs transition-colors cursor-pointer"
          >
            <Globe className="w-3 h-3 text-zinc-400" />
            <span>{language === 'fa' ? 'EN' : 'فا'}</span>
          </button>
        </div>
      </header>

      {/* عنوان بزرگ در موبایل (در بالای نقشه، دقیقاً شبیه عکس نمونه) */}
      <div className="lg:hidden text-center pt-2 pb-1 shrink-0">
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">
          {language === 'fa' ? 'ولایت‌های افغانستان' : 'Provinces of Afghanistan'}
        </span>
        <h1 className="text-2xl font-black text-zinc-900 tracking-tight leading-tight">
          <span className="text-[#ea580c]">{language === 'fa' ? 'سی و چهار' : '34'}</span>{' '}
          {language === 'fa' ? 'ولایت در سراسر افغانستان' : 'Provinces Across Afghanistan'}
        </h1>
        <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
          {language === 'fa'
            ? 'روی نقشه یا کپسول‌ها کلیک کنید تا وارد دنیای هر ولایت شوید'
            : 'Select any province on map to explore details'}
        </p>
      </div>

      {/* ناحیه تعاملی میانی */}
      <div className="w-full flex-1 flex flex-col lg:flex-row items-center justify-between overflow-hidden my-auto gap-2 lg:gap-8 min-h-0">
        
        {/* ستون راست دسکتاپ: تیتراژ بزرگ + کارت پایدار با ارتفاع ثابت بدون پرش */}
        <div className="hidden lg:flex flex-col w-80 xl:w-96 shrink-0 text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
            {language === 'fa' ? 'ولایت‌های افغانستان' : 'Provinces of Afghanistan'}
          </span>

          <h1 className="text-3xl xl:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
            <span className="text-[#ea580c]">{language === 'fa' ? 'سی و چهار' : 'Thirty-Four'}</span>{' '}
            {language === 'fa' ? 'ولایت در سراسر افغانستان' : 'Provinces Across Afghanistan'}
          </h1>

          <p className="mt-3 text-xs xl:text-sm text-zinc-500 leading-relaxed text-justify">
            {language === 'fa'
              ? 'از قله‌های سر به فلک کشیده پامیر و هندوکش تا دشت‌های سیستان و دره‌های خرم هرات؛ هر ولایت هویتی سرشار از تاریخ و فرهنگ دارد.'
              : 'From the towering peaks of Pamir to fertile valleys of Herat, discover the rich heritage of all 34 provinces.'}
          </p>

          {/* محفظه با ارتفاع ثابت فیکس h-[180px] تا با تغییر متن هیچ پرشی رخ ندهد */}
          <div className="mt-5 h-[180px] p-4 bg-white/95 border border-zinc-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900">
                  {language === 'fa' ? activeProvince.nameFa : activeProvince.nameEn}
                </h3>
                <span className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {language === 'fa'
                    ? `مرکز: ${activeProvince.capitalFa}`
                    : `Capital: ${activeProvince.capitalEn}`}
                </span>
              </div>

              <Link
                href={`/provinces/${activeProvince.slug}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-[#ea580c] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <span>{language === 'fa' ? 'مشاهده ولسوالی‌ها' : 'Districts'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
              {language === 'fa' ? activeProvince.descriptionFa : activeProvince.descriptionEn}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-zinc-400" />
                {activeProvince.population}
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3 h-3 text-zinc-400" />
                {activeProvince.districts.length} {language === 'fa' ? 'ولسوالی' : 'Districts'}
              </span>
              <span>{activeProvince.areaKm2.toLocaleString()} km²</span>
            </div>
          </div>
        </div>

        {/* ستون وسط: نقشه کامل در دسکتاپ و موبایل */}
        <div className="w-full flex-1 h-full min-h-0 flex items-center justify-center">
          <AfghanistanMap
            hoveredProvinceId={hoveredProvinceId}
            onHoverProvince={setHoveredProvinceId}
          />
        </div>

        {/* ستون چپ دسکتاپ یا خط‌کش افقی موبایل */}
        <RulerProvincePicker
          hoveredProvinceId={hoveredProvinceId}
          onHoverProvince={setHoveredProvinceId}
        />
      </div>

      {/* فوتر مینیمال */}
      <footer className="w-full h-6 flex items-center justify-between text-[11px] text-zinc-400 shrink-0 border-t border-zinc-200/50 pt-1">
        <div>
          {language === 'fa'
            ? 'روی هر ولایت کلیک کنید تا نقشه ولسوالی‌ها و تصاویر باز شود'
            : 'Click on any province to explore districts & photo gallery'}
        </div>
        <div className="hidden sm:block">
          {language === 'fa' ? '۳۴ ولایت در ۸ زون افغانستان' : '34 Provinces in 8 Zones'}
        </div>
      </footer>
    </main>
  );
}