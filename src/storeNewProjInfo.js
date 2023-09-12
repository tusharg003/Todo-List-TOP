import { displayNewProject } from "./display-proj";

const projName = document.querySelector("#proj-name");
const dueDate = document.querySelector("#due-date");

export function storeNewProjInfo() {
    event.preventDefault();
    let projectName = projName.value;
    let projectDueDate = dueDate.value;
    displayNewProject(projectName, projectDueDate);
}