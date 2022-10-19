const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

let greatAuthors = books.filter(function (books) {
    return books.sales > 1000000;
}).map(function (greatAuthors) {
    return `${greatAuthors.author} adalah penulis buku ${greatAuthors.title} yang sangat hebat!`;
})

console.log(greatAuthors);


// for (let i = 0; i < books.length; i++) {
//     if (books[i].sales > 100000) {
//         greatAuthors.push(books[i]);
//     }
// }




// console.log(greatAuthors);
// .map(console.log(`${author} adalah penulis buku ${title} yang sangat hebat!`));
// .map(city => console.log(city.name + ':' + city.population));

