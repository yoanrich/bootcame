function greeting(name, language) {
    if (language === "English") {
        return ` good morning ${name}!`
    } else if (language === "France") {
        return `Bonjour ${name}!`;
    } else {
        return `selamat pagi ${name}!`;
    }
}
let greetingMassage = greeting("Harry", "France");
console.log(greetingMassage);
