var jmlangkot = 10;
var angkotberoperasi = 5;


for (var noangkot = 1; noangkot <= jmlangkot; noangkot++) {
    if (noangkot <= angkotberoperasi) {
        console.log('angkot no ' + noangkot + 'dapat beropersi');
    }
    else if (noangkot === 8) {
        console.log('angkot no ' + noangkot + 'sedang lembur');
    }
    else {
        console.log('angkot no ' + noangkot + ' tidak dapat beropersi');
    }
}