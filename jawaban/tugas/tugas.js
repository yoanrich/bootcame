//menampilkan nilai sebanyak x, dan menentukan bilangn ganjil atau genap

let n = 10;

for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i % 2 === 1) {
        console.log("ini ganjil");
    }
    else if (i % 2 === 0) {
        console.log("ini Genap");
    }
    else {
        console.log("");
    }
}
