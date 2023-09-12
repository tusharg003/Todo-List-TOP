// import {}
import { storeNewProjInfo } from "./storeNewProjInfo";

const modalBox = document.querySelector(".new-project-modal");
let modalBoxSubmitBtn = document.querySelector(".modal-content-form-submit");
let modalBoxCancelBtn = document.querySelector(".modal-content-form-cancel");

function closeModal(e) {
    console.log(e);
    modalBox.style.display = "none";
}

export function createNewProject() {

    modalBox.style.display = "block";
    console.log("new project created");

    modalBoxSubmitBtn.addEventListener("click", storeNewProjInfo);
    modalBoxSubmitBtn.addEventListener("click", closeModal);
    modalBoxCancelBtn.addEventListener("click", closeModal);
}



