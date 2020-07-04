const from = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const taskInput = document.querySelector('#task')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
// load all event

loadEventListener()

function loadEventListener(){
    // add Task 
    from.addEventListener('submit', addTask)

    // remove addlistener
    tasklist.addEventListener('click', removeTask)

    // claer all task
    clearBtn.addEventListener('click', clearTask)

    // filter task
    filter.addEventListener('keyup', filterTask)


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

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure ?')){
            e.target.parentElement.parentElement.remove()

        }
    }
// console.log(e.target);

}


function clearTask(e){
   tasklist.innerHTML = ''
    e.preventDefault()
}


function filterTask(e) {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent
        if(item.toLocaleLowerCase().indexOf(text) !=-1){
            task.style.display = 'block'
        }
        else{
            task.style.display = 'none'
        }
    })
    console.log(text);
    
}