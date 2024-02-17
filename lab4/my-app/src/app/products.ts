export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  imgURL: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: ' Apple iPhone 13 128Gb Midnight черный',
    price: 290338 ,
    description: "-технология NFC: Да \n -цвет: черный\n -тип экрана: OLED, Super Retina XDR\n-диагональ: 6.1 дюйм\n-размер оперативной памяти: 4 ГБ\n-процессор: 6-ядерный Apple A15 Bionic\n-объем встроенной памяти: 128.0 ГБ\n-емкость аккумулятора: 3095.0 мАч",
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },  
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra 12 ГБ/512 ГБ черный',
    price: 523825,
    description: "-технология NFC: Да \n -цвет: черный\n -тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, Super Retina XDR\n-диагональ: 6.8 дюйм\n-размер оперативной памяти: 12 ГБ\n-процессор: 8-ядерный Snapdragon 8 Gen 2\n-объем встроенной памяти: 512.0 ГБ\n-емкость аккумулятора: 5000.0 мАч",
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-512-gb-chernyi-108916047/?c=750000000"
  },
  {
    id: 3,
    name: 'Буратино лимонад буратино 2 л',
    price: 475,
    description: 'вкус: буратино',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h47/63822392066078.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/buratino-limonad-buratino-2-l-100208155/?c=750000000"
  },
  {
    id: 4,
    name: 'Аралтуз поваренная соль йодированная помол средний 1000 г',
    price: 73,
    description: 'сорт: высший',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h3b/hcb/83296490618910.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/araltuz-povarennaja-sol-iodirovannaja-pomol-srednii-1000-g-100218821/?c=750000000"
  },
  {
    id: 5,
    name: 'Мукалтин таблетки 50 мг 10 шт',
    price: 205,
    description: 'возрастные ограничения: с 6 лет',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h1c/83678055694366.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/mukaltin-tabletki-50-mg-10-sht-100990373/?c=750000000"
  },
  {
    id: 6,
    name: 'Терафлю порошок 325 мг 10 шт',
    price: 2260,
    description: 'возрастные ограничения: с 18 лет',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000"
  },
  {
    id: 7,
    name: 'Отдельный дом • 13 комнат',
    price: 520000000,
    description: 'Продается добротный дом для большой семьи, расположен по адресу мкр. Терискей.',
    rating: 5, 
    imgURL: "https://alakcell-photos-kr.kcdn.kz/webp/6b/6bfa4ebf-afd7-41be-a0a1-7e434297216e/39-750x470.webp",
    url: "https://krisha.kz/a/show/672785350"
  },
  {
    id: 8,
    name: 'Ручка шариковая Cello Maxriter XS 1 шт, цвет чернил синий  ',
    price: 475,
    description: 'форма корпуса: круглый',
    rating: 5, 
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h72/h3c/63859319341086.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/ruchka-sharikovaja-cello-maxriter-xs-1-sht-tsvet-chernil-sinii-100369607/?c=750000000"
  },
  {
    id: 9,
    name: 'Toyota Camry 2014 г',
    price: 10200000,
    description: 'литые диски, тонировка, ксенон, биксенон, кожа, аудиосистема, bluetooth, CD, MP3, USB, DVD, климат-контроль, ГУР, ABS, SRS, сигнализация, автозапуск, бесключевой доступ, полный электропакет, центрозамок, круиз-контроль, мультируль, камера заднего вида, датчик света, датчик дождя, датчик давления в шинах, налог уплачен, техосмотр пройден, вложений не требует',
    rating: 5, 
    imgURL: "https://alakt-photos-kl.kcdn.kz/webp/64/6487010e-53c7-4f0e-ba90-9b5642feed00/7-1200x752.webp",
    url: "https://kolesa.kz/a/show/166018812"
  },
  {
    id: 10,
    name: 'Chevrolet Cobalt 2023 г',
    price: 7290000,
    description: 'литые диски, хрустальная оптика, дневные ходовые огни, корректор фар, велюр, комбинированный, bluetooth, MP3, ГУР, ABS, иммобилайзер, полный электропакет, центрозамок, кондиционер, бортовой компьютер, навигационная система, свежепригнан, свежедоставлен, вложений не требует',
    rating: 5, 
    imgURL: "https://alakt-photos-kl.kcdn.kz/webp/dd/ddda6b37-da1b-47b6-a50a-96d21f72c8ac/18-1200x752.webp",
    url: "https://kolesa.kz/a/show/139693110"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/