const openMobileNavigation = document.querySelector(
  ".mobile-nav-items-anchor-open"
);
const closeMobileNavigation = document.querySelector(
  ".mobile-nav-items-anchor-close"
);

const navigation = document.querySelector(".nav-items");

const linkedin = document.querySelector(".linkedin");
const instagram = document.querySelector(".instagram");
const github = document.querySelector(".github");

openMobileNavigation.addEventListener("click", () => {
  navigation.style.display = "flex";
  openMobileNavigation.style.display = "none";
  closeMobileNavigation.style.display = "flex";
});

closeMobileNavigation.addEventListener("click", () => {
  navigation.style.display = "none";
  openMobileNavigation.style.display = "flex";
  closeMobileNavigation.style.display = "none";
});

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/felipe-lino-developer/");
});

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/felipe.glino/");
});

github.addEventListener("click", () => {
  window.open("https://github.com/felipe-gl18");
});
