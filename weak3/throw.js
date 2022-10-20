

function getReactArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        // throw 'Parameter is not a number!';
    }
}

try {
    getReactArea(3, "A"); //apabila A diganti angka makan throw tidak tampil
} catch (e) {
    throw 'error';
}
