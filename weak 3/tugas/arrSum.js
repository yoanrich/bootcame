// array number positif
// lakukan penjumlahan 
// function
let num = [2, 3, 6, 8, 5];
// reduce adalah methot array
// nilai hasil kalkulasi sebelumnya dikalkulasi untuk elemen selanjutnya
const sum = num.reduce((a, b) => { return a + b });
// 2 + 3 = 6 
// 6 + 6 = 12
// 12 + 8 = 20
// 20 + 5 = 25
console.log(sum);
