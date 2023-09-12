console.log("This is index.js reporting from the source folder");

import { displayDefaultProject } from "./display-proj";
import { defaultProject } from "./default-project";
import './styles.css';

defaultProject();
displayDefaultProject();

console.log("the page is loaded");