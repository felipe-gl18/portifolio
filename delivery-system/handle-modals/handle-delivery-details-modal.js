export class HandleDeliveryDetailsModal {
  constructor() {}

  handler() {
    const deliveryModal = document.querySelector(".modal-delivery");
    const openDeliveryModal = document.querySelector(
      ".modal-delivery-close-anchor"
    );

    openDeliveryModal.addEventListener("click", () => {
      deliveryModal.style.display = "none";
    });
  }
}
