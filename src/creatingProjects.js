import { fromUnixTime } from "date-fns";
import { displayTasks, clearTaskDom } from "./creatingTasks";

function projectEventListner() {
    //event listner for creating new Project
    const addProject = document.querySelector(".addNewProjectBtn");
    addProject.addEventListener("click", showNewProjectModal);

    const cancelProjectForm = document.querySelector(".modal-content-form-cancel");
    cancelProjectForm.addEventListener("click", closeNewProjectModal);

    const submitProjectForm = document.querySelector(".modal-content-form-submit");
    submitProjectForm.addEventListener("click", processNewProjectModalInput);

    // const menuBtn = document.querySelector(".menuBtn")
    // menuBtn.addEventListener("click", menuProject)

    displayProject(projectList);
}

//create project factory function
const CreateProject = (name, dataProject, dueDate) => {
    let taskList = [];
    let taskNum = taskList.length;
    return {
        name,
        dataProject,
        dueDate,
        taskList,
        taskNum
    }
}

//save projectList and last id data on Local Storage
let lastSelectedProjectId = localStorage.getItem("lastSelectedProjectId");

function saveToLocalStorage() {
    localStorage.setItem("myProjectList", JSON.stringify(projectList));
    if (lastSelectedProjectId) {
        localStorage.setItem("lastSelectedProjectId", lastSelectedProjectId);
    }
}

// find next data-set
const findNextDataset = () => {
    const allProjects = document.querySelectorAll("[data-project]");
    return allProjects.length;
}
//get project list from local storage or make new
let defaultProjectList = [];
let projectList = localStorage.getItem("myProjectList");
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

//close new project modal
const closeNewProjectModal = () => {
    let newProjectModal = document.querySelector('.new-project-modal');
    let newProjectInput = document.querySelector('.modal-content-form');
    //clear the form
    newProjectInput.value = "";
    newProjectModal.style.display = "none";
}

//create a project and add it to the list of proj in html
const addProject = (project_title, dataProject) => {
    // console.log("addProject is running")
    // console.log(dataProject)
    const newProjectContainer = document.querySelector(".project-links-container")
    const newProjectDiv = document.createElement('div');

    newProjectDiv.setAttribute("data-project", `${dataProject}`);
    newProjectDiv.textContent = project_title;
    newProjectDiv.classList.add("project-link-items");

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "...";
    menuBtn.classList.add("menuBtn")
    newProjectDiv.appendChild(menuBtn)

    const menuModal = document.createElement('div');
    menuModal.innerHTML = `
        <div class="drop-down-menu-project-modal">
        <div>Edit</div>
        <div>Delete</div>
        </div>
    `
    menuModal.classList.add("menu-modal");
    newProjectDiv.appendChild(menuModal);

    newProjectContainer.appendChild(newProjectDiv);
    if (dataProject === localStorage.getItem("currentId")) {
        newProjectDiv.classList.add(".selected_project");
    }
}

//process the input and prepare to create project
const processNewProjectModalInput = (e) => {
    let projectName = document.querySelector('#proj-name').value;
    let projectDueDate = document.querySelector('#due-date').value;
    let dataProject = findNextDataset();

    const newProject = CreateProject(projectName, dataProject, projectDueDate);

    projectList.push(newProject);
    saveToLocalStorage();

    addProject(projectName, dataProject);
    closeNewProjectModal();
    e.preventDefault();

}

//show new project modal
const showNewProjectModal = () => {
    let newProjectModal = document.querySelector('.new-project-modal');
    newProjectModal.style.display = "block";
    //focus on input feild
    document.querySelector('#proj-name').focus();
}



//display all the projects under project tab
const displayProject = (array) => {
    array.forEach(project => {
        addProject(project.name, project.dataProject);
        displayTasks()
        // console.log(project);
    });
 
}



function selectedProject() {
    const projects = document.querySelectorAll('.project-link-items');
    projects.forEach(project => {
        project.addEventListener("click", e => {
            // Remove the "selected-project" class from all projects
            if (
                (e.target.tagName !== "BUTTON" && (!e.target.classList.contains("menu-modal")) &&
                    !e.target.closest('.menu-modal')) // Check if the clicked element or its ancestors are not part of the dropdown menu
            ) {
                clearTaskDom();
                projects.forEach(otherProject => {
                    otherProject.classList.remove("selected-project");
                });

                // Add the "selected-project" class to the clicked project
                e.target.classList.add("selected-project");

                //displays all the tasks of this project
                displayTasks(e.target.getAttribute("data-project"));

                updateTitle(e.target)
                // updateDescription(project);
                console.log(e.target.getAttribute("data-project"));
                updateDescription(e.target.getAttribute("data-project"));
                // Store the last selected project
                lastSelectedProjectId = e.target.getAttribute("data-project");
                saveToLocalStorage();
            }

        });

    });

}

//selected menu btn
//updating the banner to current selected project
function updateTitle(nameNode) {
    const title = document.querySelector(".project-banner-text");
    title.textContent = nameNode.firstChild.textContent; // This line updates the content of the element with the class "project-banner-text"

    title.style.textTransform = "capitalize";
}

//updating the description of the project
function updateDescription(data_project) {
    // dueDateDom.textContent = "";
    const dueDateDom = document.getElementById("label-values-date");
    projectList.forEach(project => {

        if (data_project == project.dataProject) {
            let dateString = project.dueDate;
            if (dateString == "") { dueDateDom.textContent = "--/--/----"; }
            else {
                let date = Date.parse(dateString);// as Datetimeformat takes date as object
                date = formattedDate(date);
                dueDateDom.textContent = date;
            }
        }

    });
}

//formatting the date
function formattedDate(date) {
    // request a weekday along with a long date
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return (new Intl.DateTimeFormat("en-GB", options).format(date));
}



export { selectedProject, projectEventListner, projectList, saveToLocalStorage };