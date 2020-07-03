const from = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const taskInput = document.querySelector('#task')

// load all event

loadEventListener()

function loadEventListener(){
    from.addEventListener('submit', addTask)
}

// add task

function addTask(e) {
    if(taskInput.value === ''){
        alert('Add something')
    }

    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value))

    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'

    li.appendChild(link)
    tasklist.appendChild(li)
    taskInput.value = ''

    e.preventDefault()
}