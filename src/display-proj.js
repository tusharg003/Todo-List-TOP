import { defaultProject } from "./default-project";

export function displayDefaultProject() {

    const projectTitleDiv = document.createElement('div');
    projectTitleDiv.textContent = defaultProject().projectTitle;
    projectTitleDiv.classList.add('project-link-items');
    const projectLinksContainer = document.querySelector(".project-links-container");
    projectLinksContainer.appendChild(projectTitleDiv);
}