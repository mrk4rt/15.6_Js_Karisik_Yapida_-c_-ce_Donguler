const ogrenciler = [
    {
      isim: "Ali",
      dersler: [
        { dersAdi: "Matematik", not: 85 },
        { dersAdi: "Türkçe", not: 92 },
        { dersAdi: "Fizik", not: 78 }
      ]
    },
    {
      isim: "Ayşe",
      dersler: [
        { dersAdi: "Matematik", not: 88 },
        { dersAdi: "Türkçe", not: 95 },
        { dersAdi: "Kimya", not: 89 }
      ]
    },
    {
      isim: "Mehmet",
      dersler: [
        { dersAdi: "Matematik", not: 76 },
        { dersAdi: "Biyoloji", not: 82 },
        { dersAdi: "Kimya", not: 91 }
      ]
    },
    {
      isim: "Zeynep",
      dersler: [
        { dersAdi: "Matematik", not: 91 },
        { dersAdi: "Türkçe", not: 87 },
        { dersAdi: "Kimya", not: 95 }
      ]
    }
  ];
  
  // Öğrencilerin ders notlarını yazdırma
  for (let ogrenci of ogrenciler) {
    console.log(`${ogrenci.isim} Öğrencisinin Ders Notları:`);
    
    for (let ders of ogrenci.dersler) {
      console.log(`${ders.dersAdi}: ${ders.not}`);
    }
  
    console.log('---'); // Her öğrencinin dersleri arasında ayırıcı çizgi
  }
  
