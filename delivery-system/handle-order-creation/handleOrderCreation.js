import { Factory } from "../factory/factory.js";
import { HandleAddOrderModal } from "../handle-modals/handle-add-order-modal.js";
import { HandleScrollingToOrderSection } from "../handle-scrolling-to-sections/handle-scrolling-to-orders-section.js";

export class HandleOrderCreation {
  constructor() {
    this.orderForm = document.querySelector(".add-order-modal>div>button");
  }

  generateOrderImage() {
    const orderImage = document.createElement("img");
    orderImage.src = "./delivery-system/assets/food.png";

    return orderImage;
  }

  generateOrderAddress(value) {
    const address = document.createElement("div");
    const addressLabel = document.createElement("p");
    const addressValue = document.createElement("span");

    address.className = "orders-item-address";
    addressLabel.innerText = "ENDEREÇO";
    addressValue.innerText = `${value}`;

    address.appendChild(addressLabel);
    address.appendChild(addressValue);

    return address;
  }

  generateOrderdeliveryman(value) {
    const deliveryman = document.createElement("div");
    const deliverymanLabel = document.createElement("p");
    const deliverymanValue = document.createElement("span");

    deliveryman.className = "orders-item-deliveryman";
    deliverymanLabel.innerText = "ENTREGADOR";
    deliverymanValue.innerText = `${value}`;

    deliveryman.appendChild(deliverymanLabel);
    deliveryman.appendChild(deliverymanValue);

    return deliveryman;
  }

  generateValue(value) {
    const price = document.createElement("div");
    const priceLabel = document.createElement("p");
    const priceValue = document.createElement("span");

    price.className = "orders-item-price";
    priceLabel.innerText = "VALOR";
    priceValue.innerText = `R$ ${value}`;

    price.appendChild(priceLabel);
    price.appendChild(priceValue);

    return price;
  }

  generateOrderDetails(value) {
    const details = document.createElement("div");
    const detailsLabel = document.createElement("p");
    const detailsValue = document.createElement("span");

    details.className = "orders-item-details";
    detailsLabel.innerText = "Detalhes do pedido";
    detailsValue.innerText = `${value}`;

    details.appendChild(detailsLabel);
    details.appendChild(detailsValue);

    return details;
  }

  generateOrderID(value) {
    const id = document.createElement("div");
    const idLabel = document.createElement("p");
    const idValue = document.createElement("span");

    id.className = "orders-item-id";
    idLabel.innerText = "ID do pedido";
    idValue.innerText = `${value}`;

    id.appendChild(idLabel);
    id.appendChild(idValue);

    return id;
  }

  listOrders(data) {
    const orders = document.querySelector(".orders");

    orders.innerHTML = "";

    data.forEach((props) => {
      const newOrder = document.createElement("div");

      const orderImage = this.generateOrderImage();
      const address = this.generateOrderAddress(props.address);
      const deliveryman = this.generateOrderdeliveryman(props.deliveryman);
      const details = this.generateOrderDetails(props.details);
      const id = this.generateOrderID(props.id);
      const price = this.generateValue(props.price);

      newOrder.className = "orders-item";

      newOrder.appendChild(orderImage);
      newOrder.appendChild(address);
      newOrder.appendChild(deliveryman);
      newOrder.appendChild(id);
      newOrder.appendChild(price);

      orders.appendChild(newOrder);
    });
  }

  create(props) {
    const address = props.address;
    const deliveryman = props.deliveryman;
    const price = props.price;
    const details = props.details;

    const factory = new Factory();
    const ordersFromLocalStorage = factory.getOrdersAtLocalStorage();
    ordersFromLocalStorage.push({
      address,
      deliveryman,
      price,
      details,
      id: `${
        Number(ordersFromLocalStorage[ordersFromLocalStorage.length - 1].id) + 1
      }`,
    });

    localStorage.setItem("orders", JSON.stringify(ordersFromLocalStorage));

    this.listOrders(ordersFromLocalStorage);
  }

  isValidated(valuesFromForm) {
    const { address, deliveryman, price, details } = valuesFromForm;
    if (
      (address.length != 5,
      deliveryman.length != 0,
      price != 0,
      details.length != 5)
    ) {
      return true;
    } else {
      return false;
    }
  }

  listenToOrderFormSubmit() {
    this.orderForm.addEventListener("click", () => {
      const address = document.querySelector(".order-address-value").value;
      const deliveryman = document.querySelector(".order-delivery-value").value;
      const price = document.querySelector(".order-price-value").value;
      const details = document.querySelector(".order-details-value").value;

      const isValidated = this.isValidated({
        address,
        deliveryman,
        price,
        details,
      });

      const handleAddOrderModal = new HandleAddOrderModal();
      const handleScrollingToOrdersSection =
        new HandleScrollingToOrderSection();

      if (isValidated) {
        this.create({ address, deliveryman, price, details });
        handleAddOrderModal.close();
        handleScrollingToOrdersSection.scroll();
      } else {
        alert("Preencha os campos corretamente!");
      }
    });
  }
}
