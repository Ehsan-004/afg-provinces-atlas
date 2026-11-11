'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AFGHANISTAN_PATHS, MAP_VIEWBOX } from '@/data/mapPaths';
import { getProvinceById, normalizeId } from '@/data/provinces';
import { useLanguage } from '@/context/LanguageContext';
import { Plus } from 'lucide-react';

interface AfghanistanMapProps {
  hoveredProvinceId: string;
  onHoverProvince: (id: string) => void;
}

// شهرهای اصلی کشور روی نقشه
const MAIN_CITIES = [
  { nameFa: "کابل", nameEn: "Kabul", x: 695, y: 395 },
  { nameFa: "هرات", nameEn: "Herat", x: 230, y: 380 },
  { nameFa: "مزار شریف", nameEn: "Mazar", x: 630, y: 195 },
  { nameFa: "قندهار", nameEn: "Kandahar", x: 490, y: 620 },
  { nameFa: "جلال‌آباد", nameEn: "Jalalabad", x: 770, y: 390 }
];

// مختصات قرارگیری نشانگر مهر در مرکز هر ولایت برای زیبایی حداکثری
const PROVINCE_CENTROIDS: Record<string, { x: number; y: number }> = {
  AFKAB: { x: 685, y: 390 },
  AFHER: { x: 220, y: 385 },
  AFBAL: { x: 610, y: 210 },
  AFKAN: { x: 490, y: 630 },
  AFBAM: { x: 575, y: 375 },
  AFNAN: { x: 765, y: 400 },
  AFBDS: { x: 800, y: 190 },
  AFPAN: { x: 700, y: 320 },
  AFGHA: { x: 630, y: 480 },
  AFGHO: { x: 410, y: 430 },
  AFSAM: { x: 650, y: 260 },
  AFDAY: { x: 530, y: 440 },
  AFNUR: { x: 790, y: 310 },
  AFHEL: { x: 370, y: 650 },
  AFNIM: { x: 250, y: 630 },
  AFBDG: { x: 310, y: 300 },
  AFPAR: { x: 675, y: 340 },
  AFKDZ: { x: 710, y: 200 },
  AFTAK: { x: 755, y: 200 },
  AFBGL: { x: 700, y: 270 },
  AFJOW: { x: 500, y: 200 },
  AFSAR: { x: 520, y: 280 },
  AFFYB: { x: 390, y: 250 },
  AFFRA: { x: 230, y: 510 },
  AFURU: { x: 520, y: 510 },
  AFZAB: { x: 600, y: 560 },
  AFPKA: { x: 700, y: 530 },
  AFPKT: { x: 720, y: 460 },
  AFKHO: { x: 755, y: 470 },
  AFLOG: { x: 705, y: 415 },
  AFWAR: { x: 640, y: 400 },
  AFKAP: { x: 715, y: 345 },
  AFLAG: { x: 740, y: 370 },
  AFKNR: { x: 805, y: 350 }
};

export default function AfghanistanMap({
  hoveredProvinceId,
  onHoverProvince
}: AfghanistanMapProps) {
  const router = useRouter();
  const { language } = useLanguage();

  const cleanHovered = normalizeId(hoveredProvinceId);
  const hoveredItem = AFGHANISTAN_PATHS.find(
    (p) => normalizeId(p.id) === cleanHovered
  );
  const targetCentroid = PROVINCE_CENTROIDS[cleanHovered] || { x: 500, y: 400 };

  const handleProvinceClick = (id: string) => {
    const province = getProvinceById(id);
    if (province) {
      router.push(`/provinces/${province.slug}`);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden p-1 sm:p-4">
      <svg
        viewBox={MAP_VIEWBOX}
        className="w-full h-full max-h-[75vh] object-contain drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ۱. لایه ژئوپلیتیک محو کشورهای همسایه در پس‌زمینه نقشه (جهت عمق بصری و واقعی بودن) */}
        <g id="neighbor-countries" className="pointer-events-none select-none opacity-40">
          <text x="120" y="440" fill="#9ca3af" fontSize="15" fontWeight="500">ایـران</text>
          <text x="280" y="100" fill="#9ca3af" fontSize="15" fontWeight="500">ترکمنستان</text>
          <text x="560" y="80" fill="#9ca3af" fontSize="15" fontWeight="500">ازبکستان</text>
          <text x="760" y="80" fill="#9ca3af" fontSize="15" fontWeight="500">تاجیکستان</text>
          <text x="910" y="140" fill="#9ca3af" fontSize="15" fontWeight="500">چـین</text>
          <text x="640" y="740" fill="#9ca3af" fontSize="16" fontWeight="500">پاکسـتان</text>
          <text x="500" y="440" fill="#27272a" fontSize="26" fontWeight="700" opacity="0.12">افغانستان</text>
        </g>

        {/* ۲. لایه تمام ۳۴ ولایت کشور */}
        <g id="base-provinces">
          {AFGHANISTAN_PATHS.map((item) => {
            const isHovered = normalizeId(item.id) === cleanHovered;
            return (
              <path
                key={item.id}
                id={item.id}
                d={item.d}
                fill={isHovered ? '#ea580c' : '#ffffff'}
                stroke="#d1d5db"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="transition-colors duration-200 cursor-pointer"
                onMouseEnter={() => onHoverProvince(item.id)}
                onClick={() => handleProvinceClick(item.id)}
              />
            );
          })}
        </g>

        {/* ۳. ولایت هایلایت‌شده روی همه لایه‌ها با خط مرزی کامل */}
        {hoveredItem && (
          <path
            key={`top-${hoveredItem.id}`}
            d={hoveredItem.d}
            fill="#ea580c"
            stroke="#9a3412"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="pointer-events-none transition-all duration-150"
          />
        )}

        {/* ۴. نشانگر دایره‌ای روی استان انتخاب شده (شبیه مهر عکس رفرنس با علامت +) */}
        {targetCentroid && (
          <g
            className="cursor-pointer transition-all duration-300 ease-out"
            onClick={() => handleProvinceClick(hoveredProvinceId)}
            style={{
              transform: `translate(${targetCentroid.x}px, ${targetCentroid.y}px)`
            }}
          >
            {/* دایره بزرگ خارجی خط‌چین */}
            <circle
              r="24"
              fill="rgba(255, 255, 255, 0.85)"
              stroke="#18181b"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            {/* دایره مرکزی با علامت مثبت */}
            <circle r="9" fill="#18181b" />
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#ffffff" strokeWidth="1.5" />
          </g>
        )}

        {/* ۵. شهرهای اصلی و نقاط قرمز روی نقشه */}
        <g id="cities-layer" className="pointer-events-none select-none">
          {MAIN_CITIES.map((city) => (
            <g key={city.nameEn}>
              <circle
                cx={city.x}
                cy={city.y}
                r="4"
                fill="#ea580c"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <text
                x={city.x + 8}
                y={city.y + 4}
                fill="#374151"
                fontSize="12"
                fontWeight="600"
                fontFamily="inherit"
              >
                {language === 'fa' ? city.nameFa : city.nameEn}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}