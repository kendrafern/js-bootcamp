


// 1.  convert array to array of objects --> text, completed
// 2. Create function to remove a todo by text value


const todos = [{
    text: 'crossfit',
    completed: true
}, {
    text: 'feed pets',
    completed: false
} , {
    text: 'cook dinner',
    completed: true
} , {
    text: 'code',
    completed: false
} , {
    text: 'wash dishes',
    completed: false
}]



const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    }) 
}


const sortTodos = function (todos)  {
    todos.sort(function (a, b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true) {
            return 1
        } else {
            return 0
        }
    })
}

// or if (!a.completed && b.completed) 
//  else if (!b.completed && a.completed)

sortTodos(todos)
console.log(todos)


//console.log(getThingsToDo(todos))



// deleteTodo(todos, 'cook dinner')
// console.log(todos)


/*
todos.splice(2, 1)
todos.push('vacuum')
todos.shift()

console.log(`You have ${todos.length} todos.`)
*/

// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
   
// })


// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }



