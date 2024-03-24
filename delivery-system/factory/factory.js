import { HandleOrderDetailsModal } from "../handle-modals/handle-order-details-modal.js";
import { HandleDeliveryDetailsModal } from "../handle-modals/handle-delivery-details-modal.js";
import { HandleAddOrderModal } from "../handle-modals/handle-add-order-modal.js";
import { HandleAddDeliveryModal } from "../handle-modals/handle-add-delivery-modal.js";
import { HandleScrollingToOrderSection } from "../handle-scrolling-to-sections/handle-scrolling-to-orders-section.js";
import { HandleScrollingToDeliverySection } from "../handle-scrolling-to-sections/handle-scrolling-to-delivery-section.js";
import { HandleCloseNavbarAction } from "../handle-navbar-actions/handle-close-navbar-action.js";
import { HandleOpenNavbarAction } from "../handle-navbar-actions/handle-open-navbar-action.js";
import { HandleDeliverySectionClickEvent } from "../handle-section-items-click-events/handleDeliverySectionClickEvent.js";
import { HandleOrdersSectionClickEvent } from "../handle-section-items-click-events/handleOrdersSectionClickEvent.js";
import { HandleChartCreation } from "../handle-chart-creation/handle-chart-creation.js";
import { HandleOrderCreation } from "../handle-order-creation/handleOrderCreation.js";
import { HandleDeliveryManCreation } from "../handle-delivery-creation/handleDeliveryCreation.js";

export class Factory {
  constructor() {}

  getDeliverymansAtLocalStorage() {
    return JSON.parse(localStorage.getItem("deliverymans"));
  }

  saveDeliverymansAtLocalStorage(deliverymans) {
    localStorage.setItem("deliverymans", JSON.stringify(deliverymans));
  }

  getOrdersAtLocalStorage() {
    return JSON.parse(localStorage.getItem("orders"));
  }

  saveOrdersAtLocalStorage(orders) {
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  async deliverymansList() {
    const handleDeliveryCreation = new HandleDeliveryManCreation();

    const deliverymansJSONData = await fetch(
      "/delivery-system/deliverymans/deliverymans.json"
    );
    const response = await deliverymansJSONData.json();

    this.saveDeliverymansAtLocalStorage(response);

    const deliverymans = this.getDeliverymansAtLocalStorage();

    handleDeliveryCreation.listDeliverymans(deliverymans);
  }

  async ordersList() {
    const handleOrderCreation = new HandleOrderCreation();

    const ordersJSONData = await fetch("/delivery-system/orders/orders.json");
    const response = await ordersJSONData.json();

    this.saveOrdersAtLocalStorage(response);

    const orders = this.getOrdersAtLocalStorage();

    handleOrderCreation.listOrders(orders);
  }

  async addingDeliveryMansOptions() {
    const handleOrderCreation = new HandleOrderCreation();

    const deliverymansJSONData = await fetch(
      "/delivery-system/deliverymans/deliverymans.json"
    );
    const response = await deliverymansJSONData.json();

    response.forEach((data) => {
      document.querySelector(
        ".order-delivery-value"
      ).innerHTML += `<option value="${data.name}">${data.name}</option>`;
    });
  }

  init() {
    const handleOrderCreation = new HandleOrderCreation();
    handleOrderCreation.listenToOrderFormSubmit();

    const handleDeliverymanCreation = new HandleDeliveryManCreation();
    handleDeliverymanCreation.listenToDeliverymanSubmit();

    const handleOrderDetailsModal = new HandleOrderDetailsModal();
    handleOrderDetailsModal.handler();

    const handleDeliveryModal = new HandleDeliveryDetailsModal();
    handleDeliveryModal.handler();

    const handleAddOrderModal = new HandleAddOrderModal();
    handleAddOrderModal.handler();

    const handleScrollingToOrdersSection = new HandleScrollingToOrderSection();
    handleScrollingToOrdersSection.handler();

    const handleScrollingToDeliverySection =
      new HandleScrollingToDeliverySection();
    handleScrollingToDeliverySection.handler();

    const handleOpenNavbarAction = new HandleOpenNavbarAction();
    handleOpenNavbarAction.handler();

    const handleCloseNavbarAction = new HandleCloseNavbarAction();
    handleCloseNavbarAction.handler();

    const handleDeliverySectionClickEvent =
      new HandleDeliverySectionClickEvent();
    handleDeliverySectionClickEvent.handler();

    const handleOrdersSectionClickEvent = new HandleOrdersSectionClickEvent();
    handleOrdersSectionClickEvent.handler();

    const handleChartCreation = new HandleChartCreation();
    handleChartCreation.handler();
  }
}
