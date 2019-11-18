// Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add (10, 1, 5)
console.log(result)  // 16

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge area
// A 25% tip on $40 would be $10

let getTip = function (total, tipPercent = .2)  {
    //let tip = total * tipPercent
    //let percent = tipPercent * 100
    //return `A ${percent}% tip on $${total} would be $${tip}.`
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}.`
}

let tip = getTip(60)
console.log(tip)

//

let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)

