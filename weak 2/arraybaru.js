const cariBilangan = (arr, num) => {
    let arrayBaru = [];
    for (let element of arr) {
        if (element % num == 0) {
            arrayBaru.push(element);
        }
    }
    return arrayBaru;
};

let array = [4, 5, 7, 2, 3, 6, 13, 15, 2, 21];
let kelipatan = 3;
let arrayBaru = cariBilangan(array, kelipatan);

console.log(array);
console.log(arrayBaru);