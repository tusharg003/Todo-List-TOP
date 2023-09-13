import { projectList, saveToLocalStorage } from "./creatingProjects";

function taskEvents() {
    const addTask = document.querySelector("#add_new_task");
    addTask.addEventListener("click", showNewTaskModal);

    const cancelTaskBtn = document.querySelector(".modal-task-cancel");
    cancelTaskBtn.addEventListener("click", closeNewTaskModal);

    const submitTaskBtn = document.querySelector(".modal-task-submit");
    submitTaskBtn.addEventListener("click", processNewTaskInput);

}

const CreateTask = (dataProject, id, title, details, completed, date) => {
    return {
        dataProject,
        id,
        title,
        details,
        completed: completed,
        date: date
    }
}
//show new task modal
const showNewTaskModal = () => {
    let newTaskModal = document.querySelector('.new-task-modal');
    newTaskModal.style.display = "block";
    document.querySelector('#task-name').focus();
}
//hide new task modal
const closeNewTaskModal = () => {
    let newTaskModal = document.querySelector('.new-task-modal');
    let newTaskModalForm = document.querySelector('.newtask-modal-content-form');
    newTaskModalForm.value = "";
    newTaskModal.style.display = "none";
}

//get id from local storage or get a new one
let defaultId = 0;
let id = Number(localStorage.getItem("currentId")) || defaultId;

//processing data from add task
function processNewTaskInput(e) {
    let taskName = document.getElementById("task-name").value;
    let taskDueDate = document.getElementById("task-due-date").value;
    let taskNotes = document.getElementById("task-notes").value;

    let dataProject = findCurrentDataProject();
    let date = processDateInput(dateInput);
    let taskId = id;

    const newTask = CreateTask(dataProject, taskId, taskName, taskNotes, false, taskDueDate);
    projectList[dataProject].taskList.push(newTask);
    id++;
    saveToLocalStorage();

    addTask(taskId, title, details, date);
    closeNewTaskModal();
    e.preventDefault();

}

//process date input function
function processDateData(date) {
    let formattedDate;
    if (!date) {
        formattedDate = "No Due Date";
    }
    else {
        formattedDate = date;
    }
    return formattedDate;
}

//display all tasks in the project
function displayTasks(dataProject) {
    projectList[dataProject].taskList.forEach((task) => {
        addTask(task.id, task.title, task.details, task.date);
    })
}

//create task into dom
function addTask(taskId, taskName, taskNotes, taskDueDate) {
    const taskContainer = document.querySelector('.todo-container');
    const newTaskCard = document.createElement('div');
    newTaskCard.innerHTML = `
    <div class="todo-card">
    <div id="todo_date">
        <span> ${taskDueDate} </span>
    </div>
    <div id="todo_title">
        <div class="todo_title_text">
            ${taskName}
        </div>
    </div>
    <div id="todo_time_delete">
        <span>9:30 - 8:30</span>
        <button>Done</button>
        <button>Delete</button>
        <button>Edit</button>
    </div>
    </div>
    `
    // newTaskCard.classList.add('todo-card');
    taskContainer.appendChild(newTaskCard);
    console.log(newTaskCard)
}

//update the title of project banner


//function to find the data-project index when adding new tasks
function findCurrentDataProject() {
    const selected = document.querySelector(".selected");
    return selected.dataset.project;
}

// function 

export { taskEvents, displayTasks, id, addTask, processDateData };