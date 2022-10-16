let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4));

PI = 5;

console.log(hitungLuasLingkaran(4));

//tidak dapat dikatakan pure function

//jika argumennya sama harus mengeluarkan hasil yang sama
//jika pure function hanya terpengaruh lingkupnya saja
