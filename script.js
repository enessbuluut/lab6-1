const hesaplaBtn = document.getElementById("hesaplaBtn");
const sonucDiv = document.getElementById("sonuc");

function harfNotuHesapla(ortalama) {
  if (ortalama >= 90) {
    return "AA";
  } else if (ortalama >= 80) {
    return "BA";
  } else if (ortalama >= 70) {
    return "BB";
  } else if (ortalama >= 60) {
    return "CB";
  } else if (ortalama >= 50) {
    return "CC";
  } else {
    return "FF";
  }
}

function notHesapla() {
  const adSoyad = document.getElementById("adSoyad").value.trim();
  const vize = parseFloat(document.getElementById("vize").value);
  const finalNotu = parseFloat(document.getElementById("final").value);

  if (adSoyad === "" || isNaN(vize) || isNaN(finalNotu)) {
    sonucDiv.innerHTML = `
      <h2>Sonuç</h2>
      <p>Lütfen tüm alanları doğru şekilde doldurunuz.</p>
    `;
    return;
  }

  const ortalama = vize * 0.4 + finalNotu * 0.6;
  const harfNotu = harfNotuHesapla(ortalama);
  const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

  sonucDiv.innerHTML = `
    <h2>${adSoyad}</h2>
    <p>Ortalama: ${ortalama.toFixed(2)}</p>
    <p>Harf Notu: ${harfNotu}</p>
    <p>Durum: ${durum}</p>
  `;
}

hesaplaBtn.addEventListener("click", notHesapla);