let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let elCheckbox = document.querySelector('.checkbox')
let elBtn = document.querySelector('.button')
let elTodos = document.querySelector('.todos')



let todos =[]


let deleteTodo = (num) => {
  todos.splice(num, 1)

  createTodo(todos)
}

const createTodo = (array) => {

  elTodos.innerText = ''
  let fragment = document.createDocumentFragment()
  array.forEach((todo, index) => {
    let elTodo = document.createElement('li')
    elTodo.classList.add('todo' )


    let elTodoCheckbox = document.createElement('input')
    elTodoCheckbox.type = 'checkbox';
    elTodoCheckbox.classList.add('todo-checkbox')


    let elTodoText = document.createElement('p')
    elTodoText.classList.add('todo-text')
    elTodoText.textContent = todo.text;

    let elTodoDelete = document.createElement('button')
    elTodoDelete.classList.add('todo-delete')
    elTodoDelete.textContent = 'X'
    elTodoDelete.dataset.id = index;


    elTodo.appendChild(elTodoCheckbox)
    elTodo.appendChild(elTodoText)
    elTodo.appendChild(elTodoDelete)

    fragment.appendChild(elTodo)
  })
  elTodos.appendChild(fragment)
}



const todosPush = (arr, todo) => {


  let includesTodo = arr.includes(todo)
  if (elCheckbox.checked == false && !includesTodo) {
    arr.push({
      text: todo
    })
  }
  if (elCheckbox.checked == true && !includesTodo) {
    arr.unshift({
      text: todo
    })
  }

  elInput.value = ''

  elInput.focus()


  for (let i = 0; i < todos.length; i++) {
    todos[i]['id'] = i
  }
}


elForm.addEventListener('submit', (evt) => {
  evt.preventDefault()


  let elInputvalue = elInput.value

  todosPush(todos, elInputvalue)
  createTodo(todos)
})





elTodos.addEventListener('click', (evt) => {
  if (evt.target.matches('.todo-delete')) {

    let indexTodo = Number(evt.target.dataset.id)

    deleteTodo(indexTodo)

  }
})
