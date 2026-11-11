'use client';

import React from 'react';
import { AFGHANISTAN_PATHS, MAP_VIEWBOX } from '@/data/mapPaths';
import { normalizeId } from '@/data/provinces';

interface MiniProvinceMapProps {
  provinceId: string;
}

export default function MiniProvinceMap({ provinceId }: MiniProvinceMapProps) {
  const cleanTarget = normalizeId(provinceId);

  return (
    <div className="w-full flex items-center justify-center py-2 select-none">
      <svg
        viewBox={MAP_VIEWBOX}
        className="w-48 sm:w-56 h-auto max-h-36 object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        {AFGHANISTAN_PATHS.map((item) => {
          const isTarget = normalizeId(item.id) === cleanTarget;

          return (
            <path
              key={item.id}
              d={item.d}
              fill={isTarget ? '#1c1917' : 'none'} // مشکی تیره برای ولایت جاری، ترنسپرنت برای بقیه
              stroke={isTarget ? '#1c1917' : '#78716c'} // کادر ظریف قهوه‌ای/خاکستری برای بقیه
              strokeWidth={isTarget ? '2' : '0.75'}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}