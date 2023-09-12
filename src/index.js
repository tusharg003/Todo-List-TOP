console.log("This is index.js reporting from the source folder");

import { displayProject } from "./dom-manipulation";
import { createNewProject } from "./addProject";

import './styles.css';


displayProject("Personal","DD/MM/YYYY");

let clickEventModule = (function () {
    const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
    addNewProjectBtn.addEventListener('click', createNewProject);
})();


console.log("the page is loaded");