// function number() {
//     let a = 10;

//     for (let i = a; i >= 1; i--) {
//         console.log(i);
//     }

// } number();

// console.log('break');

// //bentuk rekursi countDown

// const countDown = start => {
//     console.log(start);
//     if (start > 0) countDown(start - 1);
// };

// countDown(10);

// console.log('break');

// // perulangan do while
// const data = mulai => {
//     console.log(mulai);
//     do {
//         mulai = data;
//         mulai--;

//     }
//     while (mulai > 1)
// };
// data(10);


// console.log("break");
// // faktorial
// const faktorial = sum => {
//     if (sum == 1) {
//         return 1;
//     }
//     else {
//         return sum * faktorial(sum - 1);
//     }
// }
// console.log(faktorial(5));

//faktorial tenery
console.log('break');
const faktorial = sum => {
    return sum == 0 ? 1 : sum * faktorial(sum - 1);
}
console.log(faktorial(5));