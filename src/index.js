import './styles.css'
import { projectEventListner,selectedProject } from './creatingProjects';
import { taskEvents } from './creatingTasks';
console.log("page loaded")

projectEventListner();
selectedProject();
taskEvents()