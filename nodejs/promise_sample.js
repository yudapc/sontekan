const perkalian = (a, b) => a * b;
const pembagian = (a, b) => a / b;
const penjumlahan = (a, b) => a + b;
const pengurangan = (a, b) => a - b;

//Contoh Promise

perkalian(10, 5)
  .then((result) => pembagian(result / 1))
  .then((result) => penjumlahan(result, 100))
  .then((result) => {
    const hasil = pengurangan(result - 5);
    console.log(hasil);
  });