import { projectList, saveToLocalStorage } from "./creatingProjects";

function taskEvents() {
    const addTaskbtn = document.querySelector("#add_new_task");
    addTaskbtn.addEventListener("click", showNewTaskModal);

    const cancelTaskBtn = document.querySelector(".modal-task-cancel");
    cancelTaskBtn.addEventListener("click", closeNewTaskModal);

    const submitTaskBtn = document.querySelector(".modal-task-submit");
    submitTaskBtn.addEventListener("click", processNewTaskInput);

}
// console.log(projectList);
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
    console.log("new task modal opened")

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
    e.preventDefault();

    console.log("processing data of the new task")

    let taskName = document.getElementById("task-name").value;
    let taskDueDate = document.getElementById("task-due-date").value;
    let taskNotes = document.getElementById("task-notes").value;

    let dataProject = findCurrentDataProject();
    taskDueDate = processDateInput(taskDueDate);
    let taskId = id;

    const newTask = CreateTask(dataProject, taskId, taskName, taskNotes, false, taskDueDate);
    console.log("dataProject:", dataProject);
    projectList[dataProject].taskList.push(newTask);
    id++;
    saveToLocalStorage();

    addTask(taskId, taskName, taskNotes, taskDueDate, dataProject);
    closeNewTaskModal();
}

//create task into dom
function addTask(taskId, taskName, taskNotes, taskDueDate, taskProjectData) {

    const taskContainer = document.querySelector('.todo-container');
    const newTaskCard = document.createElement('div');
    newTaskCard.innerHTML = `
    <div class="todo-card" data-project=${taskProjectData}>
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
    newTaskCard.classList.add('todo-card');
    taskContainer.appendChild(newTaskCard);
    // console.log(newTaskCard);
}

function clearTaskDom() {
    const todoCards = document.querySelectorAll('.todo-card');

    // Loop through each todo-card and remove it
    todoCards.forEach((todoCard) => {
        todoCard.remove();
    });
}

//process date input function
function processDateInput(date) {
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
        addTask(task.id, task.title, task.details, task.date, task.taskProjectData);
    })
}

//update the title of project banner


function findCurrentDataProject() {
    const selectedProject = document.querySelector(".selected-project");
    console.log("Selected project element:", selectedProject);

    if (selectedProject) {
        console.log(selectedProject)
        return selectedProject.getAttribute("data-project");
    }
    return null; // Return null if no project is selected
}

// function 

export { taskEvents, displayTasks, id, addTask, clearTaskDom, processDateInput };