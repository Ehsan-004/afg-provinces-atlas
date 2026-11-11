export interface DistrictInfo {
  nameFa: string;
  nameEn: string;
}

export interface ProvinceData {
  id: string;
  num: string;
  slug: string;
  nameFa: string;
  nameEn: string;
  capitalFa: string;
  capitalEn: string;
  regionFa: string;
  regionEn: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  areaKm2: number;
  population: string;
  descriptionFa: string;
  descriptionEn: string;
  districts: DistrictInfo[];
  images: {
    url: string;
    captionFa: string;
    captionEn: string;
  }[];
}

export const PROVINCES: ProvinceData[] = [
  {
    id: "AFKAB",
    num: "۰۱",
    slug: "kabul",
    nameFa: "کابل",
    nameEn: "Kabul",
    capitalFa: "کابل",
    capitalEn: "Kabul",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۴°۳۱′ شمالی", lng: "۶۹°۱۰′ شرقی" },
    areaKm2: 4462,
    population: "۵,۲۰۰,۰۰۰",
    descriptionFa: "پایتخت کهن و قلب فرهنگی و سیاسی افغانستان، آرمیده در دامنه‌های دره تاریخی هندوکش با باغ‌های سرسبز بابر و قصرهای باستانی.",
    descriptionEn: "The ancient capital and vibrant cultural heart of Afghanistan, situated along the historic Kabul River basin surrounded by the Hindu Kush peaks.",
    districts: [
      { nameFa: "کابل (مرکز)", nameEn: "Kabul City" },
      { nameFa: "پغمان", nameEn: "Paghman" },
      { nameFa: "بگرامی", nameEn: "Bagrami" },
      { nameFa: "ده‌سبز", nameEn: "Deh Sabz" },
      { nameFa: "شکردره", nameEn: "Shakar Dara" },
      { nameFa: "کلکان", nameEn: "Kalakan" },
      { nameFa: "استالف", nameEn: "Istalif" },
      { nameFa: "سروبی", nameEn: "Surobi" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1400&q=85",
        captionFa: "نمای تاریخی کوهستان و دره کابل",
        captionEn: "Panoramic view of historic Kabul valley"
      },
      {
        url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "باغ‌های تاریخی بابر و معماری کهن کابل",
        captionEn: "Historic Babur Gardens pavilion"
      },
      {
        url: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1400&q=85",
        captionFa: "غروب آفتاب بر فراز تپه‌های پغمان",
        captionEn: "Sunset over the foothills of Paghman"
      }
    ]
  },
  {
    id: "AFHER",
    num: "۰۲",
    slug: "herat",
    nameFa: "هرات",
    nameEn: "Herat",
    capitalFa: "هرات",
    capitalEn: "Herat",
    regionFa: "زون غرب",
    regionEn: "Western Zone",
    coordinates: { lat: "۳۴°۲۰′ شمالی", lng: "۶۲°۱۲′ شرقی" },
    areaKm2: 54778,
    population: "۲,۱۰۰,۰۰۰",
    descriptionFa: "نگین درخشان خراسان باستانی با معماری تیموری، خاستگاه سبک مینیاتور بهزاد و دژ استوار اختیارالدین.",
    descriptionEn: "The jewel of Khorasan with Timurid monuments, celebrated as the artistic cradle of the Behzad miniature school.",
    districts: [
      { nameFa: "شهر هرات", nameEn: "Herat City" },
      { nameFa: "گذره", nameEn: "Guzara" },
      { nameFa: "انجیل", nameEn: "Injil" },
      { nameFa: "غوریان", nameEn: "Ghoryan" },
      { nameFa: "زنده‌جان", nameEn: "Zinda Jan" },
      { nameFa: "شیندند", nameEn: "Shindand" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85",
        captionFa: "مسجد جامع تاریخی و کاشی‌کاری‌های فیروزه‌ای هرات",
        captionEn: "Turquoise tiles of the Great Mosque of Herat"
      },
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دژ باستانی قلعه اختیارالدین (ارگ هرات)",
        captionEn: "Ikhtiyaruddin Citadel fortress"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
        captionFa: "مناره‌های تاریخی مصلی هرات",
        captionEn: "Ancient Musalla minarets of Herat"
      }
    ]
  },
  {
    id: "AFBAL",
    num: "۰۳",
    slug: "balkh",
    nameFa: "بلخ",
    nameEn: "Balkh",
    capitalFa: "مزار شریف",
    capitalEn: "Mazar-i-Sharif",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۶°۴۲′ شمالی", lng: "۶۷°۰۶′ شرقی" },
    areaKm2: 16186,
    population: "۱,۵۰۰,۰۰۰",
    descriptionFa: "ام‌البلاد کهن، زادگاه مولانا جلال‌الدین محمد بلخی و بارگاه لاجوردی روضه شریف در مزار شریف.",
    descriptionEn: "The Mother of Cities, birthplace of mystic poet Rumi, and custodian of the celebrated Blue Shrine.",
    districts: [
      { nameFa: "مزار شریف", nameEn: "Mazar-i-Sharif" },
      { nameFa: "بلخ", nameEn: "Balkh" },
      { nameFa: "دهدادی", nameEn: "Dehdadi" },
      { nameFa: "شولگره", nameEn: "Sholgara" },
      { nameFa: "چمتال", nameEn: "Chemtal" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "گنبد فیروزه‌ای روضه مبارک مزار شریف",
        captionEn: "Azure dome of the Blue Shrine in Mazar"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دیوارهای خشتی و تاریخی بلخ باستان",
        captionEn: "Ancient mudbrick ramparts of Old Balkh"
      }
    ]
  },
  {
    id: "AFKAN",
    num: "۰۴",
    slug: "kandahar",
    nameFa: "قندهار",
    nameEn: "Kandahar",
    capitalFa: "قندهار",
    capitalEn: "Kandahar",
    regionFa: "زون جنوب",
    regionEn: "Southern Zone",
    coordinates: { lat: "۳۱°۳۷′ شمالی", lng: "۶۵°۴۲′ شرقی" },
    areaKm2: 54022,
    population: "۱,۴۰۰,۰۰۰",
    descriptionFa: "پایتخت درخشان دوره احمد شاه درانی، قطب بازرگانی و باغستان‌های نام‌آشنای انار و انگور.",
    descriptionEn: "Historic founding capital under Ahmad Shah Durrani, celebrated for lush pomegranate orchards.",
    districts: [
      { nameFa: "شهر قندهار", nameEn: "Kandahar City" },
      { nameFa: "ارغنداب", nameEn: "Arghandab" },
      { nameFa: "دامان", nameEn: "Daman" },
      { nameFa: "اسپین بولدک", nameEn: "Spin Boldak" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "چشم‌انداز باغستان‌های ارغنداب قندهار",
        captionEn: "Verdant orchards of Arghandab valley"
      },
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
        captionFa: "آثار باستانی چهل زینه قندهار",
        captionEn: "Historic monument of Chil Zina"
      }
    ]
  },
  {
    id: "AFBAM",
    num: "۰۵",
    slug: "bamyan",
    nameFa: "بامیان",
    nameEn: "Bamyan",
    capitalFa: "بامیان",
    capitalEn: "Bamyan",
    regionFa: "زون مرکزی",
    regionEn: "Central Highlands",
    coordinates: { lat: "۳۴°۴۹′ شمالی", lng: "۶۷°۴۹′ شرقی" },
    areaKm2: 18029,
    population: "۴۹۵,۰۰۰",
    descriptionFa: "مهد تندیس‌های صخره‌ای بودا و اولین پارک ملی افغانستان با دریاچه‌های لاجوردی و تراورتنی بند امیر.",
    descriptionEn: "Home to the monumental Buddha niches and pristine azure waters of Band-e-Amir National Park.",
    districts: [
      { nameFa: "مرکز بامیان", nameEn: "Bamyan Center" },
      { nameFa: "یکاولنگ", nameEn: "Yakawlang" },
      { nameFa: "پنجاب", nameEn: "Panjab" },
      { nameFa: "ورس", nameEn: "Waras" },
      { nameFa: "شیبر", nameEn: "Shibar" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
        captionFa: "آب‌های کریستالی پارک ملی بند امیر",
        captionEn: "Pristine travertine lakes of Band-e-Amir"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
        captionFa: "صخره‌های سرخ و شکاف مجسمه‌های کهن بامیان",
        captionEn: "Historic sandstone cliffs of Bamyan"
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره سرسبز فولادی بامیان",
        captionEn: "Lush Foladi mountain valley"
      }
    ]
  },
  {
    id: "AFBDS",
    num: "۰۶",
    slug: "badakhshan",
    nameFa: "بدخشان",
    nameEn: "Badakhshan",
    capitalFa: "فیض‌آباد",
    capitalEn: "Fayzabad",
    regionFa: "زون شمال‌شرق",
    regionEn: "Northeastern Zone",
    coordinates: { lat: "۳۷°۰۷′ شمالی", lng: "۷۰°۳۴′ شرقی" },
    areaKm2: 44059,
    population: "۱,۰۵۰,۰۰۰",
    descriptionFa: "بام جهان و فلات واخان، سرزمین معادن افسانه‌ای لاجورد و کوه‌های پوشیده از برف پامیر.",
    descriptionEn: "The Roof of the World, home to the Wakhan corridor and legendary five-millennium-old lapis mines.",
    districts: [
      { nameFa: "فیض‌آباد", nameEn: "Fayzabad" },
      { nameFa: "واخان", nameEn: "Wakhan" },
      { nameFa: "کشم", nameEn: "Kishim" },
      { nameFa: "شغنان", nameEn: "Shighnan" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "قله‌های مرتفع پامیر در واخان بدخشان",
        captionEn: "Soaring peaks of the Pamir in Wakhan"
      },
      {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره آمودریا در مرز شغنان",
        captionEn: "Amu Darya alpine river gorge"
      }
    ]
  },
  {
    id: "AFPAN",
    num: "۰۷",
    slug: "panjshir",
    nameFa: "پنجشیر",
    nameEn: "Panjshir",
    capitalFa: "بازارک",
    capitalEn: "Bazarak",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۵°۱۹′ شمالی", lng: "۶۹°۳۲′ شرقی" },
    areaKm2: 3610,
    population: "۱۷۵,۰۰۰",
    descriptionFa: "دره سرسبز و ستیغ‌صخره‌ای هندوکش با رودخانه خروشان پنجشیر و گنجینه‌های زمرد ناب.",
    descriptionEn: "Dramatic alpine gorge flanked by Hindu Kush ramparts, famed for emerald mines and roaring rivers.",
    districts: [
      { nameFa: "بازارک", nameEn: "Bazarak" },
      { nameFa: "رخه", nameEn: "Rukha" },
      { nameFa: "دره", nameEn: "Darah" },
      { nameFa: "پریان", nameEn: "Paryan" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره سرسبز و رودخانه پرخروش پنجشیر",
        captionEn: "The emerald valley and roaring Panjshir river"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "ارتفاعات برفی کوتل خاواک",
        captionEn: "Snowbound passes of the upper valley"
      }
    ]
  },
  {
    id: "AFNAN",
    num: "۰۸",
    slug: "nangarhar",
    nameFa: "ننگرهار",
    nameEn: "Nangarhar",
    capitalFa: "جلال‌آباد",
    capitalEn: "Jalalabad",
    regionFa: "زون شرق",
    regionEn: "Eastern Zone",
    coordinates: { lat: "۳۴°۲۶′ شمالی", lng: "۷۰°۲۶′ شرقی" },
    areaKm2: 7727,
    population: "۱,۷۰۰,۰۰۰",
    descriptionFa: "ولایت همیشه بهار با نخلستان‌ها، باغ‌های نارنج و گذرگاه تاریخی خیبر.",
    descriptionEn: "Evergreen eastern gateway, rich in subtropical citrus groves and trade routes.",
    districts: [
      { nameFa: "جلال‌آباد", nameEn: "Jalalabad" },
      { nameFa: "سرخرود", nameEn: "Surkh Rod" },
      { nameFa: "خوگیانی", nameEn: "Khogyani" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "طبیعت سرسبز و نخلستان‌های جلال‌آباد",
        captionEn: "Subtropical palms and groves of Jalalabad"
      }
    ]
  },
  {
    id: "AFGHA",
    num: "۰۹",
    slug: "ghazni",
    nameFa: "غزنی",
    nameEn: "Ghazni",
    capitalFa: "غزنی",
    capitalEn: "Ghazni",
    regionFa: "زون جنوب‌شرق",
    regionEn: "Southeastern Zone",
    coordinates: { lat: "۳۳°۳۲′ شمالی", lng: "۶۸°۲۵′ شرقی" },
    areaKm2: 22915,
    population: "۱,۳۶۰,۰۰۰",
    descriptionFa: "پایتخت تاریخی غزنویان، مهد تمدن اسلامی با مناره‌های خشتی بی‌بدیل و آرامگاه حکیم سنایی.",
    descriptionEn: "Medieval imperial citadel of Sultan Mahmud, famed for ornamental terracotta minarets.",
    districts: [
      { nameFa: "شهر غزنی", nameEn: "Ghazni City" },
      { nameFa: "جاغوری", nameEn: "Jaghori" },
      { nameFa: "مالستان", nameEn: "Malistan" },
      { nameFa: "ناور", nameEn: "Nawur" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85",
        captionFa: "مناره‌های تاریخی دوره غزنوی",
        captionEn: "Ghaznavid historic victory minarets"
      }
    ]
  },
  {
    id: "AFGHO",
    num: "۱۰",
    slug: "ghor",
    nameFa: "غور",
    nameEn: "Ghor",
    capitalFa: "فیروزکوه",
    capitalEn: "Firuzkoh",
    regionFa: "زون غرب مرکزی",
    regionEn: "Central West Zone",
    coordinates: { lat: "۳۴°۳۱′ شمالی", lng: "۶۵°۱۵′ شرقی" },
    areaKm2: 36479,
    population: "۷۶۰,۰۰۰",
    descriptionFa: "خاستگاه امپراتوری غوریان و میزبان شاهکار معماری خشتی جهان، منار جام ثبت‌شده در یونسکو.",
    descriptionEn: "Cradle of the Ghurid sultans and guardian of the 65-meter UNESCO Minaret of Jam.",
    districts: [
      { nameFa: "فیروزکوه", nameEn: "Firuzkoh" },
      { nameFa: "شهرک", nameEn: "Shahrak" },
      { nameFa: "لعل و سرجنگل", nameEn: "Lal Wa Sarjangal" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره هریرود و منار باشکوه جام",
        captionEn: "The soaring Minaret of Jam in Harirod canyon"
      }
    ]
  },
  {
    id: "AFSAM",
    num: "۱۱",
    slug: "samangan",
    nameFa: "سمنگان",
    nameEn: "Samangan",
    capitalFa: "ایبک",
    capitalEn: "Aybak",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۶°۱۵′ شمالی", lng: "۶۸°۰۱′ شرقی" },
    areaKm2: 11262,
    population: "۴۴۰,۰۰۰",
    descriptionFa: "سرزمین حماسه‌های شاهنامه و تخت رستم؛ شگفت‌انگیزترین نیایشگاه سنگی حفرشده در کوه.",
    descriptionEn: "Home to the monolithic rock-cut Buddhist stupa of Takht-e Rustam carved into sandstone bedrock.",
    districts: [
      { nameFa: "ایبک", nameEn: "Aybak" },
      { nameFa: "خرم و سارباغ", nameEn: "Khuram Wa Sarbagh" },
      { nameFa: "دره صوف", nameEn: "Darah Sof" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
        captionFa: "استوپای سنگی یکپارچه تخت رستم",
        captionEn: "Monolithic sandstone stupa of Takht-e Rustam"
      }
    ]
  },
  {
    id: "AFDAY",
    num: "۱۲",
    slug: "daykundi",
    nameFa: "دایکندی",
    nameEn: "Daykundi",
    capitalFa: "نیلی",
    capitalEn: "Nili",
    regionFa: "زون مرکزی",
    regionEn: "Central Highlands",
    coordinates: { lat: "۳۳°۴۵′ شمالی", lng: "۶۶°۰۵′ شرقی" },
    areaKm2: 18088,
    population: "۵۱۵,۰۰۰",
    descriptionFa: "قلب کوهستانی هزارستان، دره‌های پلکانی با شکوفه‌های سپید بادام و مردمانی فرهنگ‌مدار.",
    descriptionEn: "Highland valleys famed for crisp almond orchards, terraced agriculture, and mountain culture.",
    districts: [
      { nameFa: "نیلی", nameEn: "Nili" },
      { nameFa: "اشترلی", nameEn: "Ashtarlay" },
      { nameFa: "شهرستان", nameEn: "Shahristan" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "شکوفه‌های بادام در کوهپایه‌های نیلی",
        captionEn: "Spring almond blossoms across Daykundi valleys"
      }
    ]
  },
  {
    id: "AFNUR",
    num: "۱۳",
    slug: "nuristan",
    nameFa: "نورستان",
    nameEn: "Nuristan",
    capitalFa: "پارون",
    capitalEn: "Parun",
    regionFa: "زون شرق",
    regionEn: "Eastern Zone",
    coordinates: { lat: "۳۵°۱۵′ شمالی", lng: "۷۰°۵۴′ شرقی" },
    areaKm2: 9225,
    population: "۱۶۷,۰۰۰",
    descriptionFa: "معماری پله‌ای چوبی بی‌نظیر بر دیواره صخره‌ها در میان جنگل‌های بکر ارس و بلوط کهنسال.",
    descriptionEn: "Unique vertical wooden timber-frame architecture clinging to steep alpine granite cliffs.",
    districts: [
      { nameFa: "پارون", nameEn: "Parun" },
      { nameFa: "کامدیش", nameEn: "Kamdesh" },
      { nameFa: "وانت وایگل", nameEn: "Waygal" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
        captionFa: "خانه‌های چوبی پلکانی کامدیش نورستان",
        captionEn: "Tiered wooden cliff houses of Kamdesh"
      }
    ]
  },
  {
    id: "AFHEL",
    num: "۱۴",
    slug: "helmand",
    nameFa: "هلمند",
    nameEn: "Helmand",
    capitalFa: "لشکرگاه",
    capitalEn: "Lashkargah",
    regionFa: "زون جنوب",
    regionEn: "Southern Zone",
    coordinates: { lat: "۳۱°۳۵′ شمالی", lng: "۶۴°۲۲′ شرقی" },
    areaKm2: 58584,
    population: "۱,۴۵۰,۰۰۰",
    descriptionFa: "پهن‌ورترین ولایت کشور در جوار هیرمند خروشان با طاق کهنسال بست مربوط به دوره غزنوی.",
    descriptionEn: "Vast southern desert and river basin, home to the monumental 11th-century Arch of Bost.",
    districts: [
      { nameFa: "لشکرگاه", nameEn: "Lashkargah" },
      { nameFa: "گرمسیر", nameEn: "Garmsir" },
      { nameFa: "کجکی", nameEn: "Kajaki" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
        captionFa: "طاق تاریخی و باستانی بست در هلمند",
        captionEn: "Historic Arch of Bost near Lashkargah"
      }
    ]
  },
  {
    id: "AFNIM",
    num: "۱۵",
    slug: "nimroz",
    nameFa: "نیمروز",
    nameEn: "Nimroz",
    capitalFa: "زرنج",
    capitalEn: "Zaranj",
    regionFa: "زون جنوب‌غرب",
    regionEn: "Southwestern Zone",
    coordinates: { lat: "۳۱°۰۰′ شمالی", lng: "۶۲°۰۰′ شرقی" },
    areaKm2: 41005,
    population: "۱۹۰,۰۰۰",
    descriptionFa: "سیستان باستانی با دشت‌های شنی روان، بادهای ۱۲۰ روزه تابستانی و رودخانه افسانه‌ای هیرمند.",
    descriptionEn: "Historic realm of Sistan, marked by shifting sand dunes and 120-day summer winds.",
    districts: [
      { nameFa: "زرنج", nameEn: "Zaranj" },
      { nameFa: "چخانسور", nameEn: "Chakhansur" },
      { nameFa: "چهاربرجک", nameEn: "Chahar Burjak" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "تپه‌های شنی روان دشت مارگو در نیمروز",
        captionEn: "Golden sand dunes of Dasht-e Margo"
      }
    ]
  },
  {
    id: "AFBDG",
    num: "۱۶",
    slug: "badghis",
    nameFa: "بادغیس",
    nameEn: "Badghis",
    capitalFa: "قلعه‌نو",
    capitalEn: "Qala-e-Naw",
    regionFa: "زون شمال‌غرب",
    regionEn: "Northwestern Zone",
    coordinates: { lat: "۳۵°۰۰′ شمالی", lng: "۶۳°۴۵′ شرقی" },
    areaKm2: 20591,
    population: "۵۵۰,۰۰۰",
    descriptionFa: "سرزمین بادهای بهاری و غنی‌ترین جنگل‌های خودروی پسته وحشی جهان در شمال‌غرب افغانستان.",
    descriptionEn: "Known for fragrant mountain breezes and vast natural wild pistachio groves.",
    districts: [
      { nameFa: "قلعه‌نو", nameEn: "Qala-e-Naw" },
      { nameFa: "قادس", nameEn: "Qadis" },
      { nameFa: "بالامرغاب", nameEn: "Bala Murghab" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "تپه‌زارهای پسته‌زار بادغیس",
        captionEn: "Verdant rolling hills and pistachio stands"
      }
    ]
  },
  {
    id: "AFPAR",
    num: "۱۷",
    slug: "parwan",
    nameFa: "پروان",
    nameEn: "Parwan",
    capitalFa: "چاریکار",
    capitalEn: "Charikar",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۵°۰۱′ شمالی", lng: "۶۹°۱۰′ شرقی" },
    areaKm2: 5974,
    population: "۷۵۰,۰۰۰",
    descriptionFa: "گذرگاه استراتژیک سالنگ و تاکستان‌های انگور نامدار چاریکار و جبل‌سراج.",
    descriptionEn: "Home of the Salang Pass mountain tunnel and famed grape vineyards.",
    districts: [
      { nameFa: "چاریکار", nameEn: "Charikar" },
      { nameFa: "جبل‌سراج", nameEn: "Jabal Saraj" },
      { nameFa: "بگرام", nameEn: "Bagram" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "قله‌های پوشیده از برف سالنگ پروان",
        captionEn: "Alpine snow peaks of the Salang route"
      }
    ]
  },
  {
    id: "AFKDZ",
    num: "۱۸",
    slug: "kunduz",
    nameFa: "کندز",
    nameEn: "Kunduz",
    capitalFa: "کندز",
    capitalEn: "Kunduz",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۶°۴۳′ شمالی", lng: "۶۸°۵۱′ شرقی" },
    areaKm2: 8068,
    population: "۱,۱۴۰,۰۰۰",
    descriptionFa: "کندوی غلات و قطب زراعتی با دشت‌های پرحاصل گندم و پنبه در امتداد رود آمودریا.",
    descriptionEn: "The fertile northern granary, rich in vast wheat fields and cotton crops.",
    districts: [
      { nameFa: "کندز", nameEn: "Kunduz" },
      { nameFa: "خان‌آباد", nameEn: "Khan Abad" },
      { nameFa: "امام صاحب", nameEn: "Imam Sahib" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دشت‌های حاصلخیز کندز",
        captionEn: "Golden wheat farmlands of Kunduz"
      }
    ]
  },
  {
    id: "AFTAK",
    num: "۱۹",
    slug: "takhar",
    nameFa: "تخار",
    nameEn: "Takhar",
    capitalFa: "تالقان",
    capitalEn: "Taloqan",
    regionFa: "زون شمال‌شرق",
    regionEn: "Northeastern Zone",
    coordinates: { lat: "۳۶°۴۳′ شمالی", lng: "۶۹°۳۱′ شرقی" },
    areaKm2: 12376,
    population: "۱,۱۰۰,۰۰۰",
    descriptionFa: "دره سرسبز فرخار، رودهای خروشان و محوطه باستانی هلنیستی آی‌خانم.",
    descriptionEn: "Scenic Farkhar valley and the famed Hellenistic city of Ai-Khanoum.",
    districts: [
      { nameFa: "تالقان", nameEn: "Taloqan" },
      { nameFa: "فرخار", nameEn: "Farkhar" },
      { nameFa: "روستاق", nameEn: "Rustaq" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره بهشتی فرخار در تخار",
        captionEn: "The alpine gorges of Farkhar"
      }
    ]
  },
  {
    id: "AFBGL",
    num: "۲۰",
    slug: "baghlan",
    nameFa: "بغلان",
    nameEn: "Baghlan",
    capitalFa: "پلخمری",
    capitalEn: "Pul-i-Khumri",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۵°۵۶′ شمالی", lng: "۶۸°۴۲′ شرقی" },
    areaKm2: 18255,
    population: "۱,۰۲۰,۰۰۰",
    descriptionFa: "شاهراه ترانزیتی شمال با محوطه کهن کوشانی سرخ‌کوتل و دره‌های سرسبز اندراب.",
    descriptionEn: "Crucial transit corridor hosting the Kushan fire temple of Surkh Kotal.",
    districts: [
      { nameFa: "پلخمری", nameEn: "Pul-i-Khumri" },
      { nameFa: "بغلان مرکزی", nameEn: "Baghlan Jadid" },
      { nameFa: "اندراب", nameEn: "Andarab" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "چشم‌انداز رودخانه و تپه‌های بغلان",
        captionEn: "River plains of Baghlan"
      }
    ]
  },
  {
    id: "AFJOW",
    num: "۲۱",
    slug: "jowzjan",
    nameFa: "جوزجان",
    nameEn: "Jowzjan",
    capitalFa: "شبرغان",
    capitalEn: "Sheberghan",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۶°۴۰′ شمالی", lng: "۶۵°۴۵′ شرقی" },
    areaKm2: 11798,
    population: "۶۱۰,۰۰۰",
    descriptionFa: "خاستگاه گنجینه زرین ۲ هزارساله طلاتپه و معادن سرشار گاز طبیعی در شمال افغانستان.",
    descriptionEn: "Discovery site of the 2,000-year-old Bactrian Gold and energy hub of the north.",
    districts: [
      { nameFa: "شبرغان", nameEn: "Sheberghan" },
      { nameFa: "آقچه", nameEn: "Aqcha" },
      { nameFa: "قرnodeقین", nameEn: "Qarqeen" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دشت‌های تاریخی جوزجان",
        captionEn: "Steppes and pastures of Jowzjan"
      }
    ]
  },
  {
    id: "AFSAR",
    num: "۲۲",
    slug: "sar-e-pol",
    nameFa: "سرپل",
    nameEn: "Sar-e Pol",
    capitalFa: "سرپل",
    capitalEn: "Sar-e Pol",
    regionFa: "زون شمال",
    regionEn: "Northern Zone",
    coordinates: { lat: "۳۶°۱۳′ شمالی", lng: "۶۵°۵۵′ شرقی" },
    areaKm2: 16360,
    population: "۶۳۰,۰۰۰",
    descriptionFa: "ولایت دره‌های صخره‌ای و معادن غنی مس بلخاب و قالی‌های دست‌باف سنتی.",
    descriptionEn: "Rugged province famed for Balkhab mineral veins and folk carpet crafts.",
    districts: [
      { nameFa: "سرپل", nameEn: "Sar-e Pol" },
      { nameFa: "بلخاب", nameEn: "Balkhab" },
      { nameFa: "سانچارک", nameEn: "Sancharak" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره‌های صخره‌ای بلخاب سرپل",
        captionEn: "Dramatic rocky canyons of Balkhab"
      }
    ]
  },
  {
    id: "AFFYB",
    num: "۲۳",
    slug: "faryab",
    nameFa: "فاریاب",
    nameEn: "Faryab",
    capitalFa: "میمنه",
    capitalEn: "Maymana",
    regionFa: "زون شمال‌غرب",
    regionEn: "Northwestern Zone",
    coordinates: { lat: "۳۵°۵۵′ شمالی", lng: "۶۴°۴۶′ شرقی" },
    areaKm2: 20293,
    population: "۱,۱۱۰,۰۰۰",
    descriptionFa: "مهد قالی‌های قزل‌باف ترکمنی و باغات سرسبز انگور و میوه‌های میمنه.",
    descriptionEn: "Celebrated internationally for finely knotted Turkmen carpets and orchards.",
    districts: [
      { nameFa: "میمنه", nameEn: "Maymana" },
      { nameFa: "اندخوی", nameEn: "Andkhoy" },
      { nameFa: "قیصار", nameEn: "Qaisar" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دشت‌ها و تپه‌های بهاری فاریاب",
        captionEn: "Spring pastures and ridges of Faryab"
      }
    ]
  },
  {
    id: "AFFRA",
    num: "۲۴",
    slug: "farah",
    nameFa: "فراه",
    nameEn: "Farah",
    capitalFa: "فراه",
    capitalEn: "Farah",
    regionFa: "زون غرب",
    regionEn: "Western Zone",
    coordinates: { lat: "۳۲°۲۲′ شمالی", lng: "۶۲°۰۷′ شرقی" },
    areaKm2: 48471,
    population: "۵۷۰,۰۰۰",
    descriptionFa: "دشت‌های فراخ غربی با قلعه باستانی فریدون و باغات انار و زراعت در حاشیه فراه رود.",
    descriptionEn: "Expansive western province home to the ancient fortress of Fereydoon.",
    districts: [
      { nameFa: "فراه", nameEn: "Farah" },
      { nameFa: "بالابلوک", nameEn: "Bala Buluk" },
      { nameFa: "اناردره", nameEn: "Anar Dara" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دشت‌های غربی و دژ کهن فراه",
        captionEn: "Desert plains and citadel of Farah"
      }
    ]
  },
  {
    id: "AFURU",
    num: "۲۵",
    slug: "urozgan",
    nameFa: "اروزگان",
    nameEn: "Urozgan",
    capitalFa: "ترین‌کوت",
    capitalEn: "Tirin Kot",
    regionFa: "زون جنوب مرکزی",
    regionEn: "South-Central Zone",
    coordinates: { lat: "۳۲°۵۶′ شمالی", lng: "۶۶°۰۰′ شرقی" },
    areaKm2: 12640,
    population: "۴۴۰,۰۰۰",
    descriptionFa: "ولایتی کوهستانی با باغات حاصلخیز زردآلو و انجیر در میان رشته‌کوه‌های ناهموار.",
    descriptionEn: "Highland valleys nestled between south-central ranges, known for dried fruit orchards.",
    districts: [
      { nameFa: "ترین‌کوت", nameEn: "Tirin Kot" },
      { nameFa: "دهراوود", nameEn: "Deh Rahwod" },
      { nameFa: "چوره", nameEn: "Chora" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره‌های زراعی ترین‌کوت اروزگان",
        captionEn: "Terraced mountain riverbanks of Urozgan"
      }
    ]
  },
  {
    id: "AFZAB",
    num: "۲۶",
    slug: "zabul",
    nameFa: "زابل",
    nameEn: "Zabul",
    capitalFa: "قلات",
    capitalEn: "Qalat",
    regionFa: "زون جنوب",
    regionEn: "Southern Zone",
    coordinates: { lat: "۳۲°۰۶′ شمالی", lng: "۶۶°۵۴′ شرقی" },
    areaKm2: 17343,
    population: "۳۹۰,۰۰۰",
    descriptionFa: "دژهای صخره‌ای مستحکم قلات بر بلندای شاهراه کابل-قندهار و باغات بادام.",
    descriptionEn: "Noted for the commanding cliff-top fortress of Qalat along the southern corridor.",
    districts: [
      { nameFa: "قلات", nameEn: "Qalat" },
      { nameFa: "شاه‌جوی", nameEn: "Shah Joy" },
      { nameFa: "شنکی", nameEn: "Shinkay" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "قلعه تاریخی و کهنسال قلات",
        captionEn: "Fortress ramparts of Qalat-i-Ghilzai"
      }
    ]
  },
  {
    id: "AFPKA",
    num: "۲۷",
    slug: "paktika",
    nameFa: "پکتیکا",
    nameEn: "Paktika",
    capitalFa: "شرنه",
    capitalEn: "Sharana",
    regionFa: "زون جنوب‌شرق",
    regionEn: "Southeastern Zone",
    coordinates: { lat: "۳۲°۵۸′ شمالی", lng: "۶۸°۳۶′ شرقی" },
    areaKm2: 19482,
    population: "۷۹۰,۰۰۰",
    descriptionFa: "کوه‌های مرزی سلیمان پوشیده از جنگل‌های چلغوزه سیاه و مراتع گسترده.",
    descriptionEn: "Border ranges clothed in valuable pine nut forests and highland plateaus.",
    districts: [
      { nameFa: "شرنه", nameEn: "Sharana" },
      { nameFa: "ارگون", nameEn: "Urgun" },
      { nameFa: "زرغون‌شهر", nameEn: "Zarghun Shahr" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        captionFa: "کوه‌های جنگلی ارگون در پکتیکا",
        captionEn: "Pine-fringed mountain ridges of Urgun"
      }
    ]
  },
  {
    id: "AFPKT",
    num: "۲۸",
    slug: "paktia",
    nameFa: "پکتیا",
    nameEn: "Paktia",
    capitalFa: "گردیز",
    capitalEn: "Gardez",
    regionFa: "زون جنوب‌شرق",
    regionEn: "Southeastern Zone",
    coordinates: { lat: "۳۳°۳۵′ شمالی", lng: "۶۹°۱۳′ شرقی" },
    areaKm2: 6432,
    population: "۶۳۰,۰۰۰",
    descriptionFa: "بالاحصار گردیز، دژ تاریخی و کهنسال بر فراز فلات کوهستانی پکتیا.",
    descriptionEn: "Dominated by the ancient Bala Hissar fortress high upon the Gardez plateau.",
    districts: [
      { nameFa: "گردیز", nameEn: "Gardez" },
      { nameFa: "زرمت", nameEn: "Zurmat" },
      { nameFa: "احمدآباد", nameEn: "Ahmadaba" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "تپه‌های تاریخی بالاحصار گردیز",
        captionEn: "Ancient citadel ridges of Gardez"
      }
    ]
  },
  {
    id: "AFKHO",
    num: "۲۹",
    slug: "khost",
    nameFa: "خوست",
    nameEn: "Khost",
    capitalFa: "خوست",
    capitalEn: "Khost",
    regionFa: "زون جنوب‌شرق",
    regionEn: "Southeastern Zone",
    coordinates: { lat: "۳۳°۲۰′ شمالی", lng: "۶۹°۵۵′ شرقی" },
    areaKm2: 4152,
    population: "۶۵۰,۰۰۰",
    descriptionFa: "دره سرسبز و پررونق تجاری در محاصره کوه‌های مرزی مشجر.",
    descriptionEn: "Dynamic commerce basin embraced by pine-clad southeastern hills.",
    districts: [
      { nameFa: "خوست", nameEn: "Khost" },
      { nameFa: "تنی", nameEn: "Tani" },
      { nameFa: "صابر", nameEn: "Sabari" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
        captionFa: "طبیعت سرسبز دره خوست",
        captionEn: "Verdant countryside of Khost valley"
      }
    ]
  },
  {
    id: "AFLOG",
    num: "۳۰",
    slug: "logar",
    nameFa: "لوگر",
    nameEn: "Logar",
    capitalFa: "پل علم",
    capitalEn: "Pul-i-Alam",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۴°۰۰′ شمالی", lng: "۶۹°۰۲′ شرقی" },
    areaKm2: 3880,
    population: "۴۳۵,۰۰۰",
    descriptionFa: "محوطه باستانی بودایی مس عینک و دشت‌های زراعی حاصلخیز در جنوب کابل.",
    descriptionEn: "South of Kabul, home to the immense Mes Aynak archaeological complex.",
    districts: [
      { nameFa: "پل علم", nameEn: "Pul-i-Alam" },
      { nameFa: "محمدآغه", nameEn: "Mohammad Agha" },
      { nameFa: "چرخ", nameEn: "Charkh" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85",
        captionFa: "تپه‌های تاریخی و دشت‌های لوگر",
        captionEn: "Rolling landscape of historic Logar"
      }
    ]
  },
  {
    id: "AFWAR",
    num: "۳۱",
    slug: "wardak",
    nameFa: "میدان وردک",
    nameEn: "Wardak",
    capitalFa: "میدان‌شهر",
    capitalEn: "Maidan Shahr",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۴°۲۴′ شمالی", lng: "۶۸°۴۸′ شرقی" },
    areaKm2: 9934,
    population: "۶۶۰,۰۰۰",
    descriptionFa: "باغات سیب سرخ و دره‌های بهسود در پیوندگاه کوهستان‌های مرکزی افغانستان.",
    descriptionEn: "Famous for crisp apple harvests and the scenic highland passes of Behsud.",
    districts: [
      { nameFa: "میدان‌شهر", nameEn: "Maidan Shahr" },
      { nameFa: "بهسود", nameEn: "Bihsud" },
      { nameFa: "جلریز", nameEn: "Jalrez" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        captionFa: "دره‌های سرسبز جلریز و میدان وردک",
        captionEn: "Picturesque agricultural valleys of Wardak"
      }
    ]
  },
  {
    id: "AFKAP",
    num: "۳۲",
    slug: "kapisa",
    nameFa: "کاپیسا",
    nameEn: "Kapisa",
    capitalFa: "محمود راقی",
    capitalEn: "Mahmud-i-Raqi",
    regionFa: "زون مرکزی",
    regionEn: "Central Zone",
    coordinates: { lat: "۳۵°۰۰′ شمالی", lng: "۶۹°۲۰′ شرقی" },
    areaKm2: 1842,
    population: "۴۹۰,۰۰۰",
    descriptionFa: "پایتخت تابستانی شاهنشاهی کوشانیان، باغ‌های انار تگاب و نجراب.",
    descriptionEn: "Summer capital of the ancient Kushans, known for delicious pomegranates.",
    districts: [
      { nameFa: "محمود راقی", nameEn: "Mahmud-i-Raqi" },
      { nameFa: "کوهستان", nameEn: "Kohistan" },
      { nameFa: "تگاب", nameEn: "Tagab" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
        captionFa: "طبیعت کوهپایه‌ای کاپیسا",
        captionEn: "Verdant foothills of Kapisa"
      }
    ]
  },
  {
    id: "AFLAG",
    num: "۳۳",
    slug: "laghman",
    nameFa: "لغمان",
    nameEn: "Laghman",
    capitalFa: "مهترلام",
    capitalEn: "Mihtarlam",
    regionFa: "زون شرق",
    regionEn: "Eastern Zone",
    coordinates: { lat: "۳۴°۳۹′ شمالی", lng: "۷۰°۱۲′ شرقی" },
    areaKm2: 3843,
    population: "۵۰۰,۰۰۰",
    descriptionFa: "جلگه دو رودخانه الینگار و الیشنگ و مهد کشاورزی معتدل شرق کشور.",
    descriptionEn: "Fertile alluvial basin fed by twin rivers, famous for rice and orchards.",
    districts: [
      { nameFa: "مهترلام", nameEn: "Mihtarlam" },
      { nameFa: "قرغه‌ای", nameEn: "Qarghayi" },
      { nameFa: "الینگار", nameEn: "Alingar" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
        captionFa: "شالیزارهای سرسبز مهترلام لغمان",
        captionEn: "Lush rice terraces of Laghman"
      }
    ]
  },
  {
    id: "AFKNR",
    num: "۳۴",
    slug: "kunar",
    nameFa: "کنر",
    nameEn: "Kunar",
    capitalFa: "اسعدآباد",
    capitalEn: "Asadabad",
    regionFa: "زون شرق",
    regionEn: "Eastern Zone",
    coordinates: { lat: "۳۵°۰۰′ شمالی", lng: "۷۱°۱۲′ شرقی" },
    areaKm2: 4942,
    population: "۵۱۰,۰۰۰",
    descriptionFa: "جنگل‌های بارانی ارس و صنوبر و دره‌های ژرف با رودخانه پرخروش کنر.",
    descriptionEn: "Dense pine and cedar wilderness carved by the torrential Kunar River.",
    districts: [
      { nameFa: "اسعدآباد", nameEn: "Asadabad" },
      { nameFa: "پیچ", nameEn: "Pech" },
      { nameFa: "نرنگ", nameEn: "Narang" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        captionFa: "جنگل‌های سوزنی‌برگ و دره کنر",
        captionEn: "Pine-clad alpine gorge of Kunar"
      }
    ]
  }
];

export function normalizeId(id: string): string {
  return id ? id.replace(/[^a-zA-Z0-9]/g, '').toUpperCase() : '';
}

export function getProvinceById(id: string): ProvinceData | undefined {
  if (!id) return undefined;
  const cleanId = normalizeId(id);
  return PROVINCES.find((p) => normalizeId(p.id) === cleanId);
}

export function getProvinceBySlug(slug: string): ProvinceData | undefined {
  if (!slug) return undefined;
  return PROVINCES.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}