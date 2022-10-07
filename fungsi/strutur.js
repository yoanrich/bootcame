
//Destruktur Array dan Object

// coba 1
const foods = ['pie', 'cake', 'honey']

const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]

console.log(myFood, yourFood, ourFood)


//coba 2 

const profile = {
    firstName: 'john',
    lastName: 'Done',
    age: 18
}

const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age

console.log(firstName, lastName, age)

//coba 3
const profile1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 18
}

const { namaDepan, namaBelakang, umur } = profile1;
console.log(namaDepan, namaBelakang, umur);

//coba 4

const profile2 = {
    namaDepan1: "John",
    namaBelakang1: "Doe",
    umur1: 18
}

let namaDepan1 = "Dimas";
let umur1 = 20;


({ namaDepan1, umur1 } = profile2);

console.log(namaDepan1);
console.log(umur1);