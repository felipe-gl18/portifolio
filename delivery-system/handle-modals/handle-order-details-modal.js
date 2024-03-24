export class HandleOrderDetailsModal {
  constructor() {}

  handler() {
    const modal = document.querySelector(".modal");
    const openModal = document.querySelector(".modal-close-anchor");

    openModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}
