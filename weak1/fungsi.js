// cara 1
function namafungsi() {
    console.log("ini fungsi 1");
}

namafungsi();

//cara 2
let namaFungsi2 = function () {
    console.log("ini fungsi 2");
};

namaFungsi2();
namaFungsi2; // tidak tampil karena variabel
console.log(namaFungsi2());// jika ingin tampail maka harus ditambah () pada fungsinya
