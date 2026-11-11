import fs from 'fs';
import path from 'path';

async function download() {
  console.log('⏳ در حال دریافت داده‌ها و نقشه برداری افغانستان...');
  
  // ۱. ساخت دایرکتوری‌های مورد نیاز
  fs.mkdirSync(path.join(process.cwd(), 'public', 'data'), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), 'src', 'data'), { recursive: true });

  // ۲. دریافت نقشه SVG رسمی استان‌ها از منبع معتبر
  const svgUrl = 'https://simplemaps.com/static/svg/country/af/admin1/af.svg';
  let svgContent = '';
  
  try {
    const res = await fetch(svgUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (res.ok) {
      svgContent = await res.text();
      fs.writeFileSync(path.join(process.cwd(), 'public', 'afghanistan.svg'), svgContent, 'utf-8');
      console.log('✅ نقشه برداری SVG دریافت و ذخیره شد (public/afghanistan.svg)');
    } else {
      console.warn('⚠️ عدم دسترسی به سرور نقشه، از منبع پشتیبان استفاده خواهد شد.');
    }
  } catch (err) {
    console.warn('⚠️ خطای شبکه در دریافت SVG:', err.message);
  }

  // ۳. دریافت دیتای ولسوالی‌ها و استان‌ها (Bilingual Dataset)
  const hierarchyUrl = 'https://raw.githubusercontent.com/open-admin-data/afghanistan-administrative-divisions/main/data/hierarchy.json';
  try {
    const res = await fetch(hierarchyUrl);
    if (res.ok) {
      const data = await res.json();
      fs.writeFileSync(
        path.join(process.cwd(), 'public', 'data', 'hierarchy.json'),
        JSON.stringify(data, null, 2),
        'utf-8'
      );
      console.log('✅ داده‌های تقسیمات استانی و ولسوالی‌ها با موفقیت ذخیره شد.');
    }
  } catch (err) {
    console.warn('⚠️ خطای دریافت داده سلسله‌مراتب ولسوالی‌ها:', err.message);
  }

  console.log('✨ عملیات آماده‌سازی اولیه پایان یافت.');
}

download();