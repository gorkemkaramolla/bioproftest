import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import React from 'react';

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <BreadCrumb regularCategoryName={'about'}></BreadCrumb>

      <div className='mx-auto  px-12 container'>
        <h1 className='text-3xl text-center font-bold mb-8'>Hakkımızda</h1>
        <p className='mt-4 leading-7  '>
          Hakkımızda Sinoz Kozmetik olarak kurulduğumuz 2008 yılından bu yana
          cilt bakımı alanında yenilikçi, kaliteli ve zengin içerikli ürün
          çeşitliliğimiz ile dünyanın her yerindeki kadınların vazgeçilmez cilt
          bakım markalarından biri olmayı başardık.
        </p>
        <p className='mt-4 leading-7 '>
          AR-GE süreci ile başlayan serüvenimiz, tüketiciye ürünü ulaştırmamız,
          ardından sunduğumuz müşteri memnuniyeti odaklı satış sonrası
          hizmetlerimiz ve kuruluşumuzdan bu yana yaptığımız inovatif,
          sürdürülebilir ve yüksek kaliteli üretim ve hizmet anlayışımız ile
          devam ediyor.
        </p>
        <p className='mt-4 leading-7'>
          Sağlıklı bir cilde sahip olmanın 3 temel adımı olan ‘’Temizleme –
          Nemlendirme ve Güneş Koruması’’ bilincini sahipleniyoruz ve
          tüketicilerimizin ciltlerindeki güzelliği keşfetmesine yardımcı
          oluyoruz.
        </p>
        <p className='mt-4 leading-7'>
          Ar-Ge uzmanlarımızın tüketicinin ihtiyaçlarına yönelik, güvenilir ve
          yüksek kalitede geliştirdiği ürünlerimizi uluslararası pazarda
          ulaşılabilir fiyatlarla sunuyoruz. Bu sayede, dünya standartlarında
          kozmetik ürünlerimizin tüketiciyle buluşmasını sağlıyor ve güzelliğe
          değer katan bir dünya markası olma hedefiyle faaliyetlerimizi
          sürdürüyoruz.
        </p>
        <p className='mt-4 leading-7'>
          2016 yılından itibaren Hollanda merkezimiz Amsterdam üzerinden birçok
          Avrupa ülkesindeki müşterilerimizle online kanallar aracılığı ile
          buluşmaya başladık.
        </p>
        <p className='mt-4 leading-7'>
          2022 yılında Hollanda’da ve Irak’ta mağazalar açarak bu ülkelerde daha
          geniş tüketiciye ulaşmayı başardık.
        </p>
        <p className='mt-4 leading-7'>
          İnsan sağlığına ve çevreye olan duyarlılığımızı en ön planda tutarak
          ürünlerimizin %98’ini geri dönüştürülebilir ambalajlardan üretiyoruz.
          Dünyanın en büyük hayvan hakları organizasyonu PETA tarafından onaylı
          bir marka olmaktan gurur duyuyoruz! Ürün çeşitliliğimizde vegan
          ürünlere yer veriyor ve ürünlerimizde hayvan deneyleri yapmayı
          reddediyoruz.
        </p>
        <p className='mt-4 leading-7'>
          Doğaya olan saygımız ve gelecek nesillere sürdürülebilir bir yaşam
          bırakabilmek için tüm çalışmalarımızı bu bilinçle şekillendiriyor ve
          bu amaçla birçok sosyal sorumluluk projesinde yer alıyoruz.
        </p>
        <p className='mt-4 leading-7'>
          Logomuzdaki yeşil renk çevreye ve canlılara karşı hissettiğimiz
          duyarlılık ve sevgimizi temsil etmektedir…
        </p>
      </div>
    </div>
  );
};

export default about;
