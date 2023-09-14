import { projectList, saveToLocalStorage } from "./creatingProjects";

//event  listners for editing projects
export function editContainerEventListner() {

    // event listner for drop down menu
    const projectContainer = document.querySelector(".project-links-container");
    projectContainer.addEventListener("click", showDropDown);
    const options = document.querySelector('.drop-down-menu-project-modal');
    // console.log(options)
    // options.firstElementChild.addEventListener("click", editProject);
    // options.lastElementChild.addEventListener('click', deleteProject);

    //clicking any where on the window removes any visible modal
    window.addEventListener('click', hideDropDown);

}

export const showDropDown = (e) => {
    if (e.target.classList.contains('menuBtn')) {
        // console.log(e.target)
        const parentDiv = e.target.closest('.project-link-items');

        const allMenuModals = document.querySelectorAll('.drop-down-menu-project-modal ');
        //hide all previously active modals
        allMenuModals.forEach((menuModal) => {
            menuModal.classList.remove("show");
        })
        //showing the clickd projects menu only!
        const menuModal = parentDiv.querySelector('.drop-down-menu-project-modal ');

        menuModal.classList.add("show");
        // console.log(menuModal);
    }
}

function hideDropDown(e) {
    console.log("window was clicked")
    if (!e.target.classList.contains('menuBtn')) {
        const menuModals = document.querySelectorAll(".drop-down-menu-project-modal");
        menuModals.forEach((menuModal) => {
            menuModal.classList.remove("show");
        });
    }
}