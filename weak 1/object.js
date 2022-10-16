const user = {
    Nama: 'Raden Sudirman',
    tanggalLahir: '1916-01-24',
    tempatLahir: 'Karangjati',
    kebangsaan: 'Indonesia',
    'Jenis Kelamin': 'laki-laki',
    'berat-badan': '67',
    pahlawan: true,
    8: 'delapan'
};
console.log(`halo, nama saya ${user.Nama}`);
console.log(`saya tinggal di ${user.tempatLahir}`);
console.log(`jenis kelamin saya ${user['Jenis Kelamin']}`);
console.log(`berat badan saya ${user['berat-badan']}`);

//console.log(`berat badan ke 2 saya ${user.berat - badan}`); // tidak bisa di proses karena harus menggunakan bracked
console.log(`acces ${user['8']}`);
//console.log(`acces ${user.8}`);


// [] breaked notation
// cara pemanggilan ada 2 :
// a = "string "
// yang menyalahi aturan pemanggilan harus menggunakan bracked notation