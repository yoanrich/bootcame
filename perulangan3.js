//while dapat menjadi couted loop apabila diberikan batasan

// let ulangi = confirm("Apakah anda ingin mengulangi?");
// let counter = 0;
// while (ulangi) {
//     counter++;
//     ulangi = confirm("Apakah anda ingin mengulangi?");
// }
// document.write(
//     "Perulangan sudah dilakukan sebanyak " + counter + " kali"
// );

let i = 1;
while (i <= 10) {
    i++;
    if (i % 2 === 0) {
        console.log(i);
    }
}