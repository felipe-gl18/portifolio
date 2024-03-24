export class HandleCloseNavbarAction {
  constructor() {}

  handler() {
    const openMobileNavigation = document.querySelector(
      ".navigation-menu-anchor-open"
    );
    const closeMobileNavigation = document.querySelector(
      ".navigation-menu-anchor-close"
    );
    const navigation = document.querySelector(".navigation-items");

    closeMobileNavigation.addEventListener("click", () => {
      navigation.style.display = "none";
      openMobileNavigation.style.display = "flex";
      closeMobileNavigation.style.display = "none";
    });
  }
}
