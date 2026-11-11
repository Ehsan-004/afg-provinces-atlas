'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ImageItem {
  url: string;
  captionFa: string;
  captionEn: string;
}

interface ProvinceAutoGalleryProps {
  images: ImageItem[];
}

export default function ProvinceAutoGallery({ images }: ProvinceAutoGalleryProps) {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const safeImages = images && images.length > 0 ? images : [
    {
      url: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1400&q=85",
      captionFa: "چشم‌انداز ولایت",
      captionEn: "Province view"
    }
  ];

  // تایمر خودکار تعویض اسلاید هر ۵ ثانیه
  useEffect(() => {
    if (safeImages.length <= 1) return;

    // شروع زوم نرم با تأخیر ۵۰ میلی‌ثانیه برای اعمال ترنزیشن
    setIsZoomed(false);
    const zoomStartTimeout = setTimeout(() => setIsZoomed(true), 50);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, 5000);

    return () => {
      clearTimeout(zoomStartTimeout);
      clearInterval(interval);
    };
  }, [index, safeImages.length]);

  const activeImage = safeImages[index] || safeImages[0];

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % safeImages.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl select-none group bg-zinc-900">
      {/* تصویر با زوم‌آین سینمایی پیوسته (Ken Burns) */}
      <img
        key={activeImage.url}
        src={activeImage.url}
        alt={activeImage.captionEn}
        className="w-full h-full object-cover transition-transform duration-[5500ms] ease-out will-change-transform"
        style={{
          transform: isZoomed ? 'scale(1.10)' : 'scale(1.00)'
        }}
      />

      {/* ماسک تیره ملایم برای خوانایی متون */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* عنوان عکس */}
      <div className="absolute bottom-5 right-5 text-white z-20 max-w-[70%]">
        <span className="text-xs sm:text-sm font-semibold tracking-tight drop-shadow-md">
          {language === 'fa' ? activeImage.captionFa : activeImage.captionEn}
        </span>
      </div>

      {/* دکمه‌ها و دات‌های ناوبری تصاویر */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-5 left-5 flex items-center gap-2 z-20">
          {/* دکمه قبلی */}
          <button
            onClick={goPrev}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            title="تصویر قبلی"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* نشانگرهای دات */}
          <div className="flex items-center gap-1.5 px-1">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* دکمه بعدی */}
          <button
            onClick={goNext}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            title="تصویر بعدی"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}