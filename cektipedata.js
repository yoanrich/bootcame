let x = 50;
let y = '70';

//melakukan pengecekan type data terlebih dahulu apabila sama2 number maka akan dieksekusi #1, jika sebaliknya makan akan dieksekusi #2

if (typeof (x) == "number" && typeof (y) == "number") {
    if (x < y) {
        console.log(true);//1
    } else {
        console.log(false); //2
    }
} else {
    console.log(false);
}
