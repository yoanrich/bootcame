// menjumlahkan matrix  
matrikx2x2 = [
    [2, 4],
    [3, 4],
];
let temporary = 0;
for (let i = 0; i < matrikx2x2.length; i++) {
    for (let j = 0; j < matrikx2x2[i].length; j++) {
        if (i === j) {
            temporary = temporary + matrikx2x2[i][j]
        }
    }
}
console.log(temporary);

// menjumlahkan matrix  3x3
matrikx3x3 = [
    [2, 4, 4],
    [3, 4, 4],
    [4, 4, 6]
];
let temp = 0;
for (let i = 0; i < matrikx3x3.length; i++) {
    for (let j = 0; j < matrikx3x3[i].length; j++) {
        if (i === j) {
            temp = temp + matrikx3x3[i][j]
        }
    }
}
console.log(temp);

// menjumlahkan matrix  4x4
matrikx4x4 = [
    [2, 4, 4, 5],
    [3, 4, 4, 8],
    [4, 4, 6, 7],
    [7, 7, 9, 8]
];
let hasil = 0;
for (let i = 0; i < matrikx4x4.length; i++) {
    for (let j = 0; j < matrikx4x4[i].length; j++) {
        if (i === j) {
            hasil = hasil + matrikx4x4[i][j]
        }
    }
}
console.log(hasil);