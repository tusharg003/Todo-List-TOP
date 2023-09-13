
function projectEventListner() {
    //event listner for creating new Project
    const addProject = document.querySelector(".addNewProjectBtn");
    addProject.addEventListener("click", showNewProjectModal);

    const cancelProjectForm = document.querySelector(".modal-content-form-cancel");
    cancelProjectForm.addEventListener("click", closeNewProjectModal);

    const submitProjectForm = document.querySelector(".modal-content-form-submit");
    submitProjectForm.addEventListener("click", processNewProjectModalInput);

    displayProject(projectList);
}

//get project list from local storage or make new
let defaultProjectList = [];
let projectList = localStorage.getItem("myProjectList");
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

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

//save projectList and last id data on Local Storage
function saveToLocalStorage() {
    localStorage.setItem("myProjectList", JSON.stringify(projectList));
    localStorage.setItem("currentId", (id).toString());
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

//show new project modal
const showNewProjectModal = () => {
    let newProjectModal = document.querySelector('.new-project-modal');
    newProjectModal.style.display = "block";
    //focus on input feild
    document.querySelector('#proj-name').focus();
}

//close new project modal
const closeNewProjectModal = () => {
    let newProjectModal = document.querySelector('.new-project-modal');
    let newProjectInput = document.querySelector('.modal-content-form');
    //clear the form
    newProjectInput.value = "";
    newProjectModal.style.display = "none";
}

//display all the projects under project tab
const displayProject = (array) => {
    array.forEach(project => {
        addProject(project.name, project.dataProject);
    });
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
    newProjectContainer.appendChild(newProjectDiv);
    if (dataProject === localStorage.getItem("currentId")) {
        newProjectDiv.classList.add(".selected_project");
    }
}

function selectedProject() {
    const projects = document.querySelectorAll('.project-link-items');
    projects.forEach(project => {
        project.addEventListener("click", e => {
            // Remove the "selected-project" class from all projects
            projects.forEach(otherProject => {
                otherProject.classList.remove("selected-project");
            });

            // Add the "selected-project" class to the clicked project
            e.target.classList.add("selected-project");
        });

        // You can remove the console.log line if you don't need it
        console.log(project.classList);
    });
}



// find next data-set
const findNextDataset = () => {
    const allProjects = document.querySelectorAll("[data-project]");
    return allProjects.length;
}
export { selectedProject, projectEventListner, projectList, saveToLocalStorage };