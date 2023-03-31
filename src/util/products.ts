import categorires from "./categories";
const products = [
  {
    id: 1,
    name: "yüz-temizleme-jeli",
    category: categorires[0],
    shortDescription:
      "Salisilik Asit, Zinc PCA ve Çay Ağacı özüyle zenginleştirilmiş formülü cildi fazla yağdan arındırır, pürüzsüz, temiz ve mat bir görünüm sağlar. 400 ml",
    url: "https://www.sinoz.com.tr/wp-content/uploads/2023/02/yuz-temizleme-jeli-yeni-ambalaj.jpg",
    caption: "Sinoz Yağlı ve Karma Ciltler İçin Yüz Temizleme Jeli",
    description: "Açıklama",
  },
  {
    id: 2,
    name: "koruyucu-süt",
    category: categorires[4],
    shortDescription:
      "Güneşin zararlı ışınlarına karşı ultra yüksek koruma sağlar ve nemlendirici hassas bakım yapar. 200ml",

    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/koruyucu-sut.jpg",

    caption:
      "Sinoz Ultra Yüksek Koruyucu & Nemlendirici Sprey Güneş Kremi SPF50+",
    description: "Açıklama",
  },
  {
    id: 3,
    name: "bronzlastirici-yag",
    category: categorires[3],

    shortDescription:
      "Muhteşem formülü ile kusursuz ve ışıltılı bronzluk. 200ml",
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/bronzlastirici-yag.jpg",
    caption: "Sinoz Kusursuz Bronzlaştırıcı Güneş Yağı Spreyi",
    description: "Açıklama",
  },
  {
    id: 4,
    name: "bronzluk-jeli",
    category: categorires[4],
    shortDescription:
      "Hafif renkli jel formülü ile uzun süren ideal ve parlak bronzluk. 200ml",
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/bronzluk-jeli.jpg",
    caption: "Sinoz Yoğun Bronzlaştırıcı Jel",
    description: "Açıklama",
  },
  {
    id: 5,
    name: "bronzluk-jeli",
    category: categorires[2],
    shortDescription:
      "Hafif renkli jel formülü ile uzun süren ideal ve parlak bronzluk. 200ml",
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/bronzluk-jeli.jpg",
    caption: "Sinoz Yoğun Bronzlaştırıcı Jel",
    description: "Açıklama",
  },
];
export default products;
interface Product {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  url: string;
  caption: string;
  description: string;
}
export type ProductType = Product;
