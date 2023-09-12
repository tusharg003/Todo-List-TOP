// import {}
import { storeNewProjInfo } from "./storeNewProjInfo";

const modalBox = document.querySelector(".new-project-modal");

function closeModal() {
    modalBox.style.display = "none";
}

export function createNewProject() {

    modalBox.style.display = "block";
    console.log("new project created");

    let modalBoxSubmitBtn = document.querySelector(".modal-content-form-submit");
    modalBoxSubmitBtn.addEventListener("click", storeNewProjInfo);
    modalBoxSubmitBtn.addEventListener("click", closeModal);

}

