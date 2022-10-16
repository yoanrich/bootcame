// const user = {
//     firstname: 'Harri',
//     lastname: 'Protter',
// }

// const renameLastNameUser = (newLastName, User) => {
//     user.lastname = newLastName;
// }

// renameLastNameUser('Potter', user);

// console.log(user);

//user berubah lastname

//agar tidak berubah 
const user = {
    firstname: 'Harri',
    lastName: 'Protter',
}

const renameLastNameUser = (newLastName, User) => {
    return { ...user.lastName = newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);