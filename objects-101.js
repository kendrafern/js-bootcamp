let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenege Area

let myHuman = {
    name: 'Nicolas',
    age: 28,
    location: 'Evansville'
}

console.log(`${myHuman.name} is ${myHuman.age} and lives in ${myHuman.location}.`)
myHuman.age = myHuman.age + 1
console.log(`${myHuman.name} is ${myHuman.age} and lives in ${myHuman.location}.`)