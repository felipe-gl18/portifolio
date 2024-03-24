export class HandleOpenNavbarAction {
  constructor() {}

  handler() {
    const openMobileNavigation = document.querySelector(
      ".navigation-menu-anchor-open"
    );
    const closeMobileNavigation = document.querySelector(
      ".navigation-menu-anchor-close"
    );
    const navigation = document.querySelector(".navigation-items");

    openMobileNavigation.addEventListener("click", () => {
      navigation.style.display = "flex";
      openMobileNavigation.style.display = "none";
      closeMobileNavigation.style.display = "flex";
    });
  }
}
