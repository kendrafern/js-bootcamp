let name = '   Kendra Brauer'

// Length property  
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))  // returns true

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword
// length is more than 8 - and it does not contain the word password


let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
    /*if (password.length > 8 && !password.includes('password')) {  
        return true
    } else {
        return false
    } */
}



console.log(isValidPassword('kendra'))


