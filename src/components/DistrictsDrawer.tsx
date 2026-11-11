'use client';

import React, { useEffect, useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { ProvinceData } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';

interface DistrictsDrawerProps {
  province: ProvinceData;
  isOpen: boolean;
  onClose: () => void;
}

export default function DistrictsDrawer({ province, isOpen, onClose }: DistrictsDrawerProps) {
  const { language } = useLanguage();
  const [rendered, setRendered] = useState(isOpen);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      const t = setTimeout(() => setAnimating(true), 20);
      return () => clearTimeout(t);
    } else {
      setAnimating(false);
      const t = setTimeout(() => setRendered(false), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!rendered) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        animating ? 'bg-black/50 backdrop-blur-xs' : 'bg-transparent'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#fbfbfa] w-full max-w-md rounded-3xl p-6 shadow-2xl border border-zinc-200 relative flex flex-col max-h-[80vh] transition-all duration-300 ease-out transform ${
          animating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
            {language === 'fa' ? 'تقسیمات اداری و شهرها' : 'Administrative Districts'}
          </span>
          <h2 className="text-2xl font-black text-zinc-900 mt-1">
            {language === 'fa' ? `ولسوالی‌های ${province.nameFa}` : `Districts of ${province.nameEn}`}
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            {language === 'fa'
              ? `شامل ${province.districts.length} ولسوالی و واحد اداری رسمی`
              : `Comprising ${province.districts.length} official districts`}
          </p>
        </div>

        {/* لیست ولسوالی‌ها */}
        <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 pr-1 space-y-1">
          {province.districts.map((district, idx) => (
            <div key={idx} className="py-2.5 flex items-center justify-between group">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-[#ea580c] transition-colors" />
                <span className="text-sm font-semibold text-zinc-800">
                  {language === 'fa' ? district.nameFa : district.nameEn}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {(idx + 1).toString().padStart(2, '۰')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}