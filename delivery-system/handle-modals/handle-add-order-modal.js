export class HandleAddOrderModal {
  constructor() {
    this.addOrderModal = document.querySelector(".add-order-modal");
    this.closeAddOrderModal = document.querySelector(
      ".add-order-modal-close-anchor"
    );
    this.openAddOrderModal = document.querySelector(
      ".orders-relation > div > button"
    );
  }

  open() {
    this.addOrderModal.style.display = "flex";
  }

  close() {
    this.addOrderModal.style.display = "none";
  }

  handler() {
    this.openAddOrderModal.addEventListener("click", () => {
      this.open();
    });

    this.closeAddOrderModal.addEventListener("click", () => {
      this.close();
    });
  }
}
