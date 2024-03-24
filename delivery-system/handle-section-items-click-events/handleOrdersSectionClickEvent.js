import { Factory } from "../factory/factory.js";

export class HandleOrdersSectionClickEvent {
  constructor() {}

  handler() {
    const ordersItem = document.querySelectorAll(".orders-item");

    ordersItem.forEach((data) => {
      data.addEventListener("click", () => {
        const factory = new Factory();
        const orders = factory.getOrdersAtLocalStorage();

        let id = data.querySelector(".orders-item-id > span").innerHTML;

        const filteredOrder = orders.filter((order) => order.id == id)[0];

        let modalContent = document.querySelector(
          ".modal > .modal-orders-item"
        );
        modalContent.querySelector(".orders-item-address > span").innerHTML =
          filteredOrder.address;
        modalContent.querySelector(".orders-item-delivery > span").innerHTML =
          filteredOrder.deliveryman;
        modalContent.querySelector(".orders-item-price > span").innerHTML =
          filteredOrder.price;
        modalContent.querySelector(".orders-item-details > span").innerHTML =
          filteredOrder.details;

        document.querySelector(".modal").style.display = "flex";
      });
    });
  }
}
