console.log("This is index.js reporting from the source folder");

import { displayDefaultProject } from "./display-proj";
import { defaultProject } from "./default-project";
import { createNewProject } from "./addProject";

import './styles.css';

defaultProject();
displayDefaultProject();

let clickEventModule = (function () {
    const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
    addNewProjectBtn.addEventListener('click', createNewProject);
})();


console.log("the page is loaded");