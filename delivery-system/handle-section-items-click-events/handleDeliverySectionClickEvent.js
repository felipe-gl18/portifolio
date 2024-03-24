export class HandleDeliverySectionClickEvent {
  constructor() {}

  handler() {
    const deliveryItem = document.querySelectorAll(".delivery-item");

    deliveryItem[0].addEventListener("click", () => {
      let address = deliveryItem[0].querySelector(
        ".delivery-item-address > span"
      ).innerHTML;
      let delivery = deliveryItem[0].querySelector(
        ".delivery-item-delivery > span"
      ).innerHTML;
      let price = deliveryItem[0].querySelector(
        ".delivery-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(
        ".modal-delivery > .delivery-item"
      );
      modalContent.querySelector(".delivery-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".delivery-item-price > span").innerHTML =
        price;

      document.querySelector(".modal-delivery").style.display = "flex";
    });

    deliveryItem[1].addEventListener("click", () => {
      let address = deliveryItem[1].querySelector(
        ".delivery-item-address > span"
      ).innerHTML;
      let delivery = deliveryItem[1].querySelector(
        ".delivery-item-delivery > span"
      ).innerHTML;
      let price = deliveryItem[1].querySelector(
        ".delivery-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(
        ".modal-delivery > .delivery-item"
      );
      modalContent.querySelector(".delivery-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".delivery-item-price > span").innerHTML =
        price;

      document.querySelector(".modal-delivery").style.display = "flex";
    });

    deliveryItem[2].addEventListener("click", () => {
      let address = deliveryItem[2].querySelector(
        ".delivery-item-address > span"
      ).innerHTML;
      let delivery = deliveryItem[2].querySelector(
        ".delivery-item-delivery > span"
      ).innerHTML;
      let price = deliveryItem[2].querySelector(
        ".delivery-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(
        ".modal-delivery > .delivery-item"
      );
      modalContent.querySelector(".delivery-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".delivery-item-price > span").innerHTML =
        price;

      document.querySelector(".modal-delivery").style.display = "flex";
    });

    deliveryItem[3].addEventListener("click", () => {
      let address = deliveryItem[3].querySelector(
        ".delivery-item-address > span"
      ).innerHTML;
      let delivery = deliveryItem[3].querySelector(
        ".delivery-item-delivery > span"
      ).innerHTML;
      let price = deliveryItem[3].querySelector(
        ".delivery-item-price > span"
      ).innerHTML;

      let modalContent = document.querySelector(
        ".modal-delivery > .delivery-item"
      );
      modalContent.querySelector(".delivery-item-address > span").innerHTML =
        address;
      modalContent.querySelector(".delivery-item-delivery > span").innerHTML =
        delivery;
      modalContent.querySelector(".delivery-item-price > span").innerHTML =
        price;

      document.querySelector(".modal-delivery").style.display = "flex";
    });
  }
}
