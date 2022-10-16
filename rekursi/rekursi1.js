// // perulangan menampilkan i = 1-10

// const data = x => {
//     //console.log(x);
//     for (let i = 1; i <= x; i++) {
//         console.log(i);
//     }
// }
// data(10);
// console.log('space....')

// menampilkan data genap

const rekursi = bulat => {
    for (let i = 1; i <= bulat; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} rekursi(10);