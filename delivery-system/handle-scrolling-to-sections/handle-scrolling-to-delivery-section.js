export class HandleScrollingToDeliverySection {
  constructor() {
    this.deliveryRelation = document.querySelector(".delivery-relation");
  }

  scroll() {
    this.deliveryRelation.scrollIntoView({ behavior: "smooth" });
  }

  handler() {
    const deliveryRelationNav = document.querySelector(
      ".delivery-relation-nav"
    );

    deliveryRelationNav.addEventListener("click", () => {
      this.scroll();
    });
  }
}
