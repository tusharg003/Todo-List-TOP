
function Project(name, due_date) {
    this.name = name;
    this.due_date = due_date;
}

export function displayProject(newProjectTitle, newProjectDueDate) {

    const newProject = new Project(newProjectTitle, newProjectDueDate);//instace of obj project
    
    const newProjTitleDiv = document.createElement('div');
    newProjTitleDiv.textContent = newProject.name;
    newProjTitleDiv.classList.add('project-link-items');
    const projectLinksContainer = document.querySelector(".project-links-container");
    projectLinksContainer.appendChild(newProjTitleDiv);
}

