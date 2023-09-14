import './styles.css'
import { projectEventListner, selectedProject } from './creatingProjects';
import { taskEvents } from './creatingTasks';
import { showDropDown, editContainerEventListner } from './editingProject';
console.log("page loaded")

projectEventListner();
selectedProject();
editContainerEventListner();
showDropDown();

taskEvents()