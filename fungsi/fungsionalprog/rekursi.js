function number() {
    let a = 10;

    for (let i = a; i >= 1; i--) {
        console.log(i);
    }

} number();

console.log('break');

//bentuk rekursi countDown

const countDown = start => {
    console.log(start);
    if (start > 0) countDown(start - 1);
};

countDown(10);

console.log('break');

// faktorial
const faktorial = function (x) {
    if (x == 1) {
        return 1;
    }
    else {
        return x * faktorial(x - 1);
    }
}
console.log(faktorial(5));

console.log('break');