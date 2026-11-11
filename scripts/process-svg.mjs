import fs from 'fs';
import path from 'path';

const svgPath = path.join(process.cwd(), 'public', 'afghanistan.svg');
const hierarchyPath = path.join(process.cwd(), 'public', 'data', 'hierarchy.json');

if (!fs.existsSync(svgPath)) {
  console.error('❌ فایل public/afghanistan.svg یافت نشد!');
  process.exit(1);
}

const svgContent = fs.readFileSync(svgPath, 'utf-8');

// استخراج viewBox
const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 1000 800';

// استخراج تگ‌های path
const pathRegex = /<path([^>]+)\/?>/g;
const paths = [];
let match;

while ((match = pathRegex.exec(svgContent)) !== null) {
  const attrStr = match[1];
  const idMatch = attrStr.match(/\bid="([^"]+)"/);
  const nameMatch = attrStr.match(/\bname="([^"]+)"/);
  const dMatch = attrStr.match(/\bd="([^"]+)"/);

  if (dMatch) {
    const id = idMatch ? idMatch[1] : '';
    const name = nameMatch ? nameMatch[1] : id;
    paths.push({
      id,
      name,
      d: dMatch[1]
    });
  }
}

// ذخیره در src/data/mapPaths.ts
const outputCode = `// Generated automatically from afghanistan.svg
export interface ProvincePath {
  id: string;
  name: string;
  d: string;
}

export const MAP_VIEWBOX = "${viewBox}";

export const AFGHANISTAN_PATHS: ProvincePath[] = ${JSON.stringify(paths, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'mapPaths.ts'), outputCode, 'utf-8');
console.log(`✅ ${paths.length} مسیر برداری ولایت استخراج و در src/data/mapPaths.ts ذخیره شد.`);