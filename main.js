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
  let waktu = parseFloat(document.getElementById("waktuLidocain").value);
  let modal = new bootstrap.Modal(
    document.getElementById("exampleModalHeparinHasil"),
  );

  if (!sedian || !waktu || !pendilut === 0) {
    alert("tidak valid oke heparin");
    return;
  }
  modal.show();

  let konsentrat = sedian / pendilut;
  // alert(konsentrat);

  let tbody = document.getElementById("hasilTableHeparin"); // Bayangkan kamu mengambil buku kosong untuk menulis hasil.

  tbody.innerHTML = ""; // Mengosongkan isi tabel.➡️ Kalau tidak:  Data akan dobel ➡️Tabel makin panjang tiap klik

  //paham ini dulu ⚡
  // tr = table row (baris) ➡️ baris horizontal | 0.05 | 3.60 |
  // td= table data (kolom) ➡️ kotak kecil di dalam baris itu. | kotak | kotak |
  // appendChild() = Menambahkan elemen sebagai anak (child) ke dalam elemen lain. ➡️Menempelkan ke tempatnya

  for (let i = 0; i < listMcg.length; i++) {
    let dosis = listMcg[i];
    let Jumlah = (dosis * beratBadan) / konsentrat;
    console.log(Jumlah);
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

function tambahTugas() {
  let input = document.getElementById("inputTugas");
  let daftarTugas = document.getElementById("tugas");

  if (input.value === "") {
    alert("isi dulu tugasnya");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `<span class="tugas-saya">${input.value}</span>
  <button class="btn-input " onclick ="clearJob(this)" > hapus </button>
  `;
  daftarTugas.appendChild(li);

  input.value = "";
}

function clearJob(tombol) {
  tombol.parentElement.remove();
}

function alur(event) {
  let input = prompt("ada gel P?");
  let input2 = confirm("berapa jarak interval?");

  if (input == "") {
    alert("jangan kosong");
  } else {
    input2;
  }
}
