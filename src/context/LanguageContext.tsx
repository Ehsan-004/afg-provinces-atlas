'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fa' | 'en';

interface Dictionary {
  siteTitle: string;
  siteSubtitle: string;
  searchPlaceholder: string;
  provincesCount: string;
  viewDetails: string;
  backToMap: string;
  capital: string;
  area: string;
  population: string;
  districtsCount: string;
  districtsList: string;
  photoGallery: string;
  selectProvinceFromMap: string;
  clickToExplore: string;
  sqKm: string;
  aboutProvince: string;
  noResults: string;
}

const DICTIONARY: Record<Language, Dictionary> = {
  fa: {
    siteTitle: 'اطلس تعاملی افغانستان',
    siteSubtitle: 'کاوش بصری ۳۴ ولایت، جغرافیا و ولسوالی‌ها',
    searchPlaceholder: 'جستجوی نام ولایت...',
    provincesCount: '۳۴ ولایت',
    viewDetails: 'مشاهده مشخصات و شهرها',
    backToMap: 'بازگشت به نقشه افغانستان',
    capital: 'مرکز',
    area: 'مساحت',
    population: 'جمعیت تخمینی',
    districtsCount: 'تعداد ولسوالی‌ها',
    districtsList: 'ولسوالی‌ها و مراکز عمده',
    photoGallery: 'تصاویر و چشم‌اندازها',
    selectProvinceFromMap: 'یک ولایت را از روی نقشه یا فهرست انتخاب کنید',
    clickToExplore: 'برای ورود و مشاهده ولسوالی‌ها کلیک کنید',
    sqKm: 'کیلومتر مربع',
    aboutProvince: 'درباره این ولایت',
    noResults: 'ولایتی با این نام یافت نشد'
  },
  en: {
    siteTitle: 'Interactive Atlas of Afghanistan',
    siteSubtitle: 'Visual exploration of 34 provinces, geography & districts',
    searchPlaceholder: 'Search province...',
    provincesCount: '34 Provinces',
    viewDetails: 'View Details & Districts',
    backToMap: 'Back to Country Map',
    capital: 'Capital',
    area: 'Area',
    population: 'Est. Population',
    districtsCount: 'Districts',
    districtsList: 'Districts & Urban Centers',
    photoGallery: 'Photo Gallery',
    selectProvinceFromMap: 'Select a province from the map or list',
    clickToExplore: 'Click to explore districts & data',
    sqKm: 'km²',
    aboutProvince: 'About this province',
    noResults: 'No province found'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa');

  useEffect(() => {
    // بازیابی زبان از حافظه محلی در صورت وجود
    const saved = localStorage.getItem('atlas_lang') as Language;
    if (saved && (saved === 'fa' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('atlas_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    }
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'fa' ? 'en' : 'fa');
  };

  const isRtl = language === 'fa';

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t: DICTIONARY[language],
        isRtl
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}