
let angka = [12, 45, 76, 23, 1, 45, 75, 23, 65, 4];

let big = angka.sort(function (kecil, besar) { return besar - kecil }); console.log(big);

console.log('break');

let number = [12, 45, 76, 23, 1, 45, 75, 23, 65, 4];

let small = number.sort(function (kecil, besar) { return kecil - besar }); console.log(small);
