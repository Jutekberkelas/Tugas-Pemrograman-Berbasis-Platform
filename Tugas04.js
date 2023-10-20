//Pendapatan penjualan harian
const pendapatanHarian = 1000000;

// Deklarasi variabel uang jasa dan persentase komisi
let uangJasa;
let persentaseKomisi;

// Menghitung uang jasa dan persentase komisi berdasarkan pendapatan
if (pendapatanHarian <= 200000) {
  uangJasa = 10000;
  persentaseKomisi = 0.1; // 10%
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
  uangJasa = 20000;
  persentaseKomisi = 0.15; // 15%
} else {
  uangJasa = 30000;
  persentaseKomisi = 0.2; // 20%
}

// Menghitung jumlah komisi
const komisi = pendapatanHarian * persentaseKomisi;

// Menghitung total pendapatan harian
const totalPendapatanHarian = uangJasa + komisi;

// Menampilkan hasil
console.log(`Pendapatan Harian: Rp. ${pendapatanHarian}`);
console.log(`Uang Jasa: Rp. ${uangJasa}`);
console.log(`Komisi: Rp. ${komisi}`);
console.log(`Total Pendapatan Harian: Rp. ${totalPendapatanHarian}`);


const name = ("Mirna Kamilah || Ti22A")

console.log(name);