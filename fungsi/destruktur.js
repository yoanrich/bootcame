/*
// coba 1
const profile = {
    firstName: 'john',
    lastName: 'Done',
    age: 18
}
// isMale tidak teridentifikasi karena blm didikler
const { firstName, age, isMale } = profile;

console.log(firstName)
console.log(age)
console.log(isMale)

//coba 2

const profile1 = {
    firstName1: 'john',
    lastName1: 'Done',
    age1: 18
}
//agar ismale memiliki value
const { firstName1, age1, isMale1 = false } = profile1;
console.log(firstName)
console.log(age)
console.log(isMale1)
*/

//coba 3
const profile2 = {
    firstName2: 'john',
    lastName2: 'Done',
    age2: 18
}
//mengubah nilai dari properti dalam objek
const { firstName2: localfirstName, lastName2: locallastName, age2: localAge } = profile2;
console.log(localfirstName)
console.log(localfirstName)
console.log(localAge)

//BAKALAN SERING KETEMU DALAM  INI DESTRUKTURISASI