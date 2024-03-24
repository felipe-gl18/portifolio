import { Factory } from "../factory/factory.js";
import { HandleAddDeliveryModal } from "../handle-modals/handle-add-delivery-modal.js";
import { HandleScrollingToDeliverySection } from "../handle-scrolling-to-sections/handle-scrolling-to-delivery-section.js";

export class HandleDeliveryManCreation {
  constructor() {
    this.deliverymanForm = document.querySelector(
      ".add-delivery-modal>div>button"
    );
  }

  generateDeliverymanImage() {
    const deliverymanImage = document.querySelector("img");
    deliverymanImage.src = "./delivery-system/assets/user.png";

    return deliverymanImage;
  }

  generateDeliverymanName(value) {
    const name = document.createElement("div");
    const nameLabel = document.createElement("p");
    const nameValue = document.createElement("span");

    name.className = "delivery-item-name";
    nameLabel.innerText = "ENTREGADOR";
    nameValue.innerText = `${value}`;

    name.appendChild(nameLabel);
    name.appendChild(nameValue);

    return name;
  }

  getIncome(deliveryman) {
    const factory = new Factory();
    const orders = factory.getOrdersAtLocalStorage();
    const ordersBelongToDeliveryman = orders.filter(
      (data) => data.deliveryman == deliveryman
    );
    const amount = ordersBelongToDeliveryman.reduce(
      (total, element) => parseFloat(element.price) + total,
      0
    );

    return amount.toFixed(2);
  }

  getDeliveriesAmount(deliveryman) {
    const factory = new Factory();
    const orders = factory.getOrdersAtLocalStorage();
    const ordersBelongToDeliveryman = orders.filter(
      (data) => data.deliveryman == deliveryman
    );
    const deliveries = ordersBelongToDeliveryman.length;

    return deliveries;
  }

  generateDeliverymanDeliveries(deliveryman) {
    const deliveriesAmount = this.getDeliveriesAmount(deliveryman);

    const deliveries = document.createElement("div");
    const deliveriesLabel = document.createElement("p");
    const deliveriesValue = document.querySelector("span");

    deliveries.className = "delivery-item-deliveries";
    deliveriesLabel.innerText = "TOTAL DE ENTREGAS";
    deliveriesValue.innerText = `${deliveriesAmount}`;

    deliveries.appendChild(deliveriesLabel);
    deliveries.appendChild(deliveriesValue);

    return deliveries;
  }

  generateDeliverymanIncome(deliveryman) {
    const incomeAmount = this.getIncome(deliveryman);

    const income = document.createElement("div");
    const incomeLabel = document.createElement("p");
    const incomeValue = document.createElement("span");

    income.className = "delivery-item-price";
    incomeLabel.innerText = "TOTAL PARA RECEBER";
    incomeValue.innerText = `R$ ${incomeAmount}`;

    income.appendChild(incomeLabel);
    income.appendChild(incomeValue);

    return income;
  }

  listDeliverymans(data) {
    const deliverymans = document.querySelector(".delivery");

    deliverymans.innerHTML = "";

    data.forEach((props) => {
      const newDeliveryman = document.createElement("div");

      const deliverymanImage = this.generateDeliverymanImage();
      const deliverymanName = this.generateDeliverymanName(props.name);
      const deliverymanDeliveries = this.generateDeliverymanDeliveries(
        props.name
      );
      const deliverymanIncome = this.generateDeliverymanIncome(props.name);

      newDeliveryman.className = "delivery-item";

      newDeliveryman.appendChild(deliverymanImage);
      newDeliveryman.appendChild(deliverymanName);
      newDeliveryman.appendChild(deliverymanDeliveries);
      newDeliveryman.appendChild(deliverymanIncome);

      deliverymans.appendChild(newDeliveryman);
    });
  }

  create(props) {
    const deliverymanName = props.name;
    const deliverymanDeliveries = props.deliveries;
    const deliverymanIncome = props.income;

    const factory = new Factory();
    const deliverymansFromLocalStorage =
      factory.getDeliverymansAtLocalStorage();

    deliverymansFromLocalStorage.push({
      deliverymanName,
      deliverymanIncome,
      deliverymanDeliveries,
    });

    localStorage.setItem(
      "deliverymans",
      JSON.stringify(deliverymansFromLocalStorage)
    );

    this.listDeliverymans(deliverymanDeliveries);
  }

  isValidated(values) {
    const { name, deliveries, income } = values;
    if (name.length != 5) {
      return true;
    } else {
      return false;
    }
  }

  listenToDeliverymanSubmit() {
    this.deliverymanForm.addEventListener("click", () => {
      const name = document.querySelector(".delivery-name-value").value;

      const isValidated = this.isValidated({
        name,
        deliveries: null,
        income: null,
      });

      const handleAddDeliveryModal = new HandleAddDeliveryModal();
      const handleScrollingToDeliverySection =
        new HandleScrollingToDeliverySection();

      if (isValidated) {
        this.create({ name, deliveries: null, income: null });
        handleAddDeliveryModal.close();
        handleScrollingToDeliverySection.scroll();
      } else {
        alert("Preencha os campos corretamente!");
      }
    });
  }
}
