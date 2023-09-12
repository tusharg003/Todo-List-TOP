export const defaultProject = () => {
    console.log("called default project module... Creating default project now");
   
    let projectArr = [];
   
    console.log("Pushing the title and name of project to the project Array...");
   
    let projectTitle = "Default Project";
    projectArr.push({ projectTitle });
   
    console.log(projectArr);
  
    return { projectArr, projectTitle };
}