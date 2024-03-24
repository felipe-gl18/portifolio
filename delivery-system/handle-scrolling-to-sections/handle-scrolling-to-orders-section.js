export class HandleScrollingToOrderSection {
  constructor() {
    this.ordersRelation = document.querySelector(".orders-relation");
  }

  scroll() {
    this.ordersRelation.scrollIntoView({ behavior: "smooth" });
  }

  handler() {
    const ordersRelationNav = document.querySelector(".orders-relation-nav");

    ordersRelationNav.addEventListener("click", () => {
      this.scroll();
    });
  }
}
