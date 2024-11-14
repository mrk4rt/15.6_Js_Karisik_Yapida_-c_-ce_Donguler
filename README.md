# Karışık Yapılarda İç İçe Döngüler

## Proje Amacı:
Bu projede, iç içe döngülerin kullanımını pekiştirmek amacıyla bir sınıftaki öğrencilerin isimleri ve aldıkları derslerin notlarını içeren bir dizi oluşturulacak. `for` veya `for...of` döngüsünü kullanarak her öğrencinin ders notları ekrana yazdırılacaktır.

---

## Değişkenler:
- **ogrenciler**: Öğrencilerin bilgilerini tutan ana dizi.
- **ogrenci**: Her bir öğrenciyi temsil eden nesne.
- **isim**: Öğrencinin ismini tutan değişken.
- **dersler**: Öğrencinin aldığı derslerin ve notlarının bulunduğu dizi.
- **ders**: Her bir dersin bilgilerini tutan nesne.
- **dersAdi**: Dersin adını tutan değişken.
- **not**: Dersin notunu tutan değişken.

---

## Anahtar Kelimeler:
- **dizi (Array)**: Birden fazla veriyi tutan veri yapısı.
- **nesne (Object)**: Bir öğrencinin adını ve ders bilgilerini tutan veri yapısı.
- **for döngüsü**: Belirli bir sayıda işlem tekrarı yapmak için kullanılan döngü yapısı.
- **for...of döngüsü**: Diziler üzerinde elemanları sırayla almak için kullanılan döngü yapısı.
- **iç içe döngüler**: Bir döngü içerisinde başka bir döngü kullanma tekniği.
- **console.log()**: Bilgileri ekrana yazdırma fonksiyonu.

---

## Proje Adımları:

1. **Öğrenciler Dizisini Oluşturma**:  
   İlk adımda, her öğrencinin bilgilerini tutacak nesnelerden oluşan bir dizi oluşturulmalıdır. Her öğrenci nesnesi, öğrencinin ismini ve derslerini içermelidir.

2. **Her Öğrencinin Derslerini Tanımlama**:  
   Her öğrenci nesnesi içinde, öğrenciye ait derslerin ve bu derslerin notlarının bulunduğu bir dizi oluşturulmalıdır. Bu dersler, ders adı ve notlardan oluşan nesneler şeklinde düzenlenebilir.

3. **Dış Döngü ile Öğrencilerin Üzerinde Gezinme**:  
   Öğrenciler dizisinin üzerinde döngü kullanarak her bir öğrenciye ulaşılmalıdır. Bu, dış döngü olacaktır. `for` ya da `for...of` döngüsü ile öğrenci nesnelerine ulaşılır.

4. **İç Döngü ile Derslerin Üzerinde Gezinme**:  
   Her öğrencinin dersleri de bir dizi olduğundan, her bir öğrencinin derslerine ulaşmak için bir iç döngü kullanılır. İç döngüde, öğrenciye ait derslerin adı ve notu ekrana yazdırılır.

5. **Notların Ekrana Yazdırılması**:  
   İç döngüde, her bir dersin adı ve notu `console.log()` ile ekrana yazdırılmalıdır.

--- 

## Örnek:
Aşağıda, bu adımları takip ederek öğrencilerin derslerini ve notlarını ekrana yazdıracağın bilgiler yazmaktadır.

```javascript

    isim: Ali
      dersAdi: Matematik, not: 85
      dersAdi: Türkçe, not: 92
      dersAdi: Fizik, not: 78

    isim: Ayşe
      dersAdi: Matematik, not: 88 
      dersAdi: Türkçe, not: 95 
      dersAdi: Kimya, not: 89 

    isim: Mehmet,
      dersAdi: Matematik, not: 76 
      dersAdi: Biyoloji, not: 82 
      dersAdi: Kimya, not: 91 

    isim: Zeynep
      dersAdi: Matematik, not: 91 
      dersAdi: Türkçe, not: 87 
      dersAdi: Kimya, not: 95

