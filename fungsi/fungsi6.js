//1
var universeSize = function () {
    return "gigantic"
}();
console.log(universeSize);

//2 ketika langsung dipanggil 
var universeSize = function () {
    return "gigantic"
};
console.log(universeSize);

//3
var universeSize = function () {
    return "gigantic"
};
console.log(universeSize());