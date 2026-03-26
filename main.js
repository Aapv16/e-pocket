const { createElement } = require("react");

function cekInput(event) {
  event.preventDefault();
  let listMcg = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5];
  let sedian = parseFloat(document.getElementById("sediaan").value) * 1000;
  let pendilut = parseFloat(document.getElementById("dilutan").value);
  let beratBadan = parseFloat(document.getElementById("berat_badan").value);
  let waktu = parseFloat(document.getElementById("waktu").value);

  if (!sedian || !pendilut || !beratBadan || !waktu === 0) {
    alert("Input tidak boleh kosong");
    return;
  }

  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalHasilVascon"),
  );
  modal.show();

  let konsentrat = sedian / pendilut;
  let tbody = document.getElementById("hasilTable"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.
  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik
  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya
  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * beratBadan * waktu) / konsentrat;
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.
    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " mcg";
    // Buat kolom pertama dan isi dengan dosis. 👆
    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(1) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆
    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}

// punya Dobutamin
function hitung2(event) {
  event.preventDefault();
  let listMcg = [3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  let sedian = parseFloat(document.getElementById("sediaanD").value) * 1000;
  let pendilut = parseFloat(document.getElementById("dilutanD").value);
  let beratBadan = parseFloat(document.getElementById("berat_badanD").value);
  let waktu = parseFloat(document.getElementById("waktuD").value);

  if (!sedian || !pendilut || !beratBadan || !waktu === 0) {
    alert("Input tidak boleh kosong");
    return;
  }

  let modal = new bootstrap.Modal(document.getElementById("exampleModalDobu"));
  modal.show();

  let konsentrat = sedian / pendilut;

  let tbody = document.getElementById("hasilTableD"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.

  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * beratBadan * waktu) / konsentrat;
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.

    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " mcg";
    // Buat kolom pertama dan isi dengan dosis. 👆

    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(1) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆

    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}
// punya Dobutamin

// punya Dopamin
function hitung3(event) {
  event.preventDefault();
  let listMcg = [3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let sedian = parseFloat(document.getElementById("sediaanDopa").value) * 1000;
  let pendilut = parseFloat(document.getElementById("dilutanDopa").value);
  let beratBadan = parseFloat(document.getElementById("beratBadanDopa").value);
  let waktu = parseFloat(document.getElementById("waktuDopa").value);
  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalDopamin"),
  );

  if (!sedian || !pendilut || !beratBadan || !waktu === 0) {
    alert("tidak valid oke dopa");
    return;
  }
  modal.show();

  let konsentrat = sedian / pendilut;

  let tbody = document.getElementById("hasilTableDopamin"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.

  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * beratBadan * waktu) / konsentrat;
    console.log(Jumlah);
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.

    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " mcg";
    // Buat kolom pertama dan isi dengan dosis. 👆

    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(1) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆

    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}
// punya Dopamin

// punya NTG
function hitung4(event) {
  event.preventDefault();
  let listMcg = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80];
  let sedian = parseFloat(document.getElementById("sediaanNTG").value) * 1000;
  let pendilut = parseFloat(document.getElementById("dilutanNTG").value);
  // let beratBadan = parseFloat(document.getElementById("beratBadanDopa").value);
  let waktu = parseFloat(document.getElementById("waktuNTG").value);
  let modal = new bootstrap.Modal(document.getElementById("exampleModalNitro"));

  if (!sedian || !pendilut || !waktu === 0) {
    alert("tidak valid oke dopa");
    return;
  }
  modal.show();

  let konsentrat = sedian / pendilut;

  let tbody = document.getElementById("hasilTableNTG"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.

  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * waktu) / konsentrat;
    console.log(Jumlah);
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.

    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " mcg";
    // Buat kolom pertama dan isi dengan dosis. 👆

    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(1) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆

    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}
// punya NTG

// punya Heparin
function hitungHeparin(event) {
  event.preventDefault();
  let listMcg = [
    10, 12, 14, 16, 18, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 500,
  ];
  let sedian = parseFloat(document.getElementById("sediaanHeparin").value);
  let pendilut = parseFloat(document.getElementById("dilutanHeparin").value);
  let beratBadan = parseFloat(
    document.getElementById("beratBadanHeparin").value,
  );
  // let waktu = parseFloat(document.getElementById("waktuHeparin").value);
  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalHeparinHasil"),
  );

  if (!beratBadan || !pendilut === 0) {
    alert("di isi dulu ya nurse,.✌️");
    return;
  }
  modal.show();

  let konsentrat = sedian / pendilut;

  let tbody = document.getElementById("hasilTableHeparin"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.

  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * beratBadan) / konsentrat;
    // alert(dosis + "*" + beratBadan + "/" + konsentrat);
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.

    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " unit";
    // Buat kolom pertama dan isi dengan dosis. 👆

    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(1) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆

    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}
// punya lidocaine ⭐
function hitungLidocaine(event) {
  event.preventDefault();
  let listMcg = [2, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20];
  let diminta = parseFloat(document.getElementById("dimintalidocaine").value);
  let sedian = parseFloat(document.getElementById("sediaanlidocaine").value);
  let pendilut = parseFloat(document.getElementById("dilutlidocaine").value);
  let volume = parseFloat(document.getElementById("dilutlidocaine").value) * 2;
  let waktu = parseFloat(document.getElementById("waktuLidocaine").value);
  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalHasilLidocaine"),
  );

  if (!sedian || !diminta || !waktu || !pendilut === 0) {
    alert("di isi dulu ya nurse,.✌️");
    return;
  }
  modal.show();

  let konsentrat = sedian * pendilut;
  // alert(konsentrat);
  let tpaper = document.getElementById("hasilAwal");
  tpaper.innerHTML = "";

  let paraf = document.createElement("p");
  paraf.innerHTML =
    " Dosis diminta (" +
    diminta +
    ")" +
    " mg * " +
    " Waktu (" +
    waktu +
    ")" +
    " menit" +
    " / " +
    " jumlah dosis " +
    "(" +
    konsentrat +
    ")" +
    " mg" +
    " * " +
    " pengencer (" +
    volume +
    ")" +
    " ml" +
    " ➡️ Hasil = " +
    ((diminta * waktu) / konsentrat) * volume +
    " ml";

  tpaper.appendChild(paraf);

  let tbody = document.getElementById("hasilTableLidocaine"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.
  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = ((dosis * waktu) / konsentrat) * volume;
    // console.log(Jumlah);
    let tr = document.createElement("tr"); // kita buat baris baru dulu 🔽 // tr itu = Kamu ambil satu baris kosong di buku.

    // Buat kolom pertama dan isi dengan dosis. 🔽
    let td1 = document.createElement("td");
    td1.textContent = dosis + " mg";
    // Buat kolom pertama dan isi dengan dosis. 👆

    // Buat kolom kedua dan isi dengan jumlah hasil. 🔽
    let td2 = document.createElement("td");
    td2.textContent = Jumlah.toFixed(0) + " ml";
    // Buat kolom kedua dan isi dengan jumlah hasil. 👆

    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama. 🔽
    tr.appendChild(td1);
    tr.appendChild(td2);
    // Gabungkan tulisan dosis dan laju dalam satu baris yang sama.👆

    // Tempel baris itu ke buku laporan.
    tbody.appendChild(tr);

    // Tempel baris itu ke buku laporan.

    // console.log(Jumlah);
  }
  return false;
}
// punya lidocaine ⭐

// punya Cordaron ⭐
function hitungCordaron(event) {
  event.preventDefault();
  let diminta = parseFloat(document.getElementById("dimintaCordaron").value);
  let sedian = parseFloat(document.getElementById("sediaanCordaron").value);
  // let pendilut = parseFloat(document.getElementById("dilutCordaron").value);
  // let volume = parseFloat(document.getElementById("dilutCordaron").value);
  let waktu = parseFloat(document.getElementById("waktuCordaron").value);
  let totalWaktu = parseFloat(
    document.getElementById("totalJamPermintaan").value,
  );
  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalHasilCordaron"),
  );

  if (!sedian || !diminta || !waktu || !totalWaktu === 0) {
    alert("di isi dulu ya nurse,.✌️");
    return;
  }
  modal.show();

  const totalDosisCordaron = diminta * waktu * totalWaktu;
  const hasilBagi = (totalDosisCordaron / sedian) * 3;
  const hasil = hasilCordaron(hasilBagi, 3);

  function hasilCordaron(hasilBagi, sedian) {
    const vialPenuh = Math.floor(totalDosisCordaron / 150);
    const sisaMl = hasilBagi % sedian;

    return {
      sisaMl,
      vialPenuh,
    };
  }

  // console.log(totalDosisCordaron);

  let papan = document.getElementById("papan");
  papan.innerHTML = "";
  let pesan = document.createElement("p");
  pesan.innerHTML = "Dosis terlalu pekat pelarut > 50 ml atau bagi 2";
  //......
  let info = document.getElementById("infoKu");
  info.innerHTML = "";

  infoPesan = document.createElement("p");
  infoPesan.innerHTML = "💡 1 vial = 150 mg / 3 ml <br> <br>";

  // .........
  let tpaper = document.getElementById("hasilAwalCor");
  tpaper.innerHTML = "";
  let paraf = document.createElement("p");

  paraf.innerHTML =
    " Dosis diminta (" +
    diminta +
    ")" +
    " mg * " +
    " Waktu (" +
    waktu +
    ")" +
    " menit" +
    " * " +
    " habis dalam " +
    "(" +
    totalWaktu +
    ")" +
    " Jam" +
    " ➡️ Hasil = " +
    totalDosisCordaron +
    " ml (Total dosis dalam) " +
    totalWaktu +
    " jam" +
    " <hr> " +
    "( " +
    totalDosisCordaron +
    " mg / 150 ) * 3 ➡️ " +
    " maka hasilnya " +
    hasilBagi.toFixed(1) +
    " ml artinya ➡️ " +
    hasil.vialPenuh +
    " ampul ➡️ " +
    hasil.sisaMl.toFixed(1) +
    " ml" +
    "<br> <hr>" +
    "jika selesai tinggal ➡️ dibagi Pengencer/total jam pemberian";

  if (hasil.vialPenuh >= 3) {
    papan.appendChild(pesan);
  } else {
    papan.style.display = "none";
  }
  tpaper.appendChild(paraf);
  info.appendChild(infoPesan);
  //
}

function hitungPengencerCordaron(event) {
  let inputCor = document.getElementById("pendilutCor").value;
  let inputWak = document.getElementById("totalWaktu").value;

  if (!inputCor || !inputWak === 0) {
    alert("di isi dulu ya nurse,.✌️");
    return;
  }
  const hasilPengcerCor = inputCor / inputWak;

  let pPengencer = document.getElementById("hasilPengencerCor");
  pPengencer.innerHTML = "";

  hasilPengencerMess = document.createElement("p");
  hasilPengencerMess.innerHTML =
    "Hasil " + hasilPengcerCor.toFixed(1) + " ml/jam";

  pPengencer.appendChild(hasilPengencerMess);
}

// punya Cordaron ⭐

// start filter in dashboard
/*
const pencariaanKu = document.getElementById("searchInput");
const menuItem = document.querySelectorAll(".menu-item");

// contoh sederhana
// button.addEventListener("click", function () {
//   alert("Tombol ditekan!");
// });
// function() itu adalah: “Perintah yang disimpan untuk dijalankan NANTI saat sesuatu terjadi”
// end contoh sederhana
pencariaanKu.addEventListener("keyup", function () {
  let value = this.value.toLowerCase();

  // “Ambil setiap menu, lalu baca tulisannya”
  // “Ambil tulisan dari menu, lalu ubah jadi huruf kecil semua”
  menuItem.forEach((item) => {
    let text = item.textContent.toLocaleLowerCase();

    if (text.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
*/

const items = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".category button");
// buat function
/*
🧒 Analogi:
Kayak kamu bilang:
“Kasih aku 2 hal:
nama kategori
benda yang diklik”
👉 el = benda itu
*/
function tombolFilterKu(mainBtnKategori, addStyleListElemenKu) {
  // pindahkan warna aktif
  // console.log("kategori:", mainBtnKategori);
  // console.log("kategori:", addStyleListElemenKu);
  buttons.forEach((btn) => btn.classList.remove("active"));
  addStyleListElemenKu.classList.add("active");
  // console.log(buttons);

  // filter item
  items.forEach((btnItem) => {
    let daftarDataItem = btnItem.getAttribute("data-kategori");
    // console.log(daftarDataItem);
    //.getAttribute(...) fungsi untuk mengambil isi atribut

    if (mainBtnKategori === "all" || daftarDataItem === mainBtnKategori) {
      btnItem.style.display = "block";
    } else {
      btnItem.style.display = "none";
    }
  });
}
// end filter

//start  humbuerger
/*
👉
“Kita ambil semua .nav-link dan simpan ke dalam btnAllLink”
👉
“Kemudian kita ambil satu per satu tombol dari btnAllLink, dan kita beri nama btnKlikChoiseLink”
👉
“Setiap tombol itu kita pasang event: jika tombol tersebut diklik…”
👉
“Maka jalankan perintah:
hapus class active dari semua tombol
lalu tambahkan class active ke tombol yang diklik”

*/
// btnAllLink = sekumpulan tombol
const btnAllLink = document.querySelectorAll(".nav-link");
// btnKlikChoiseLink = 1 tombol
btnAllLink.forEach((btnKlikChoiseLink) => {
  btnKlikChoiseLink.addEventListener("click", function (event) {
    btnAllLink.forEach((btnHapusLink) =>
      btnHapusLink.classList.remove("active"),
    );
    this.classList.add("active");
  });
});
