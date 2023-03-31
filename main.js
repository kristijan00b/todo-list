let taskInput = document.querySelector('#new-task')
let allTasks = document.querySelector('.tasks')
let btnAdd = document.querySelector('#create-task')

function addTask(event) {
    event.preventDefault()
    let inputValue = taskInput.value
    if (inputValue === '') {
        alert('Please, write task.')
    } else {
        allTasks.innerHTML += `<li class="task">
                                        <p>${inputValue}</p>
                                        <button class="btn-remove">x</button>
                                    </li>`
        taskInput.value = ''
        taskInput.focus()

        let tasks = document.querySelectorAll('.task')
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.style.background = "olivedrab"
            }
        }

        let activeTasks = document.querySelectorAll('.btn-remove')
        for (let i = 0; i < activeTasks.length; i++) {
            activeTasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }
    }
}

function enterKey(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        btnAdd.click()
        taskInput.focus()
    }
}

btnAdd.addEventListener('click', addTask)
taskInput.addEventListener('keyup', enterKey)