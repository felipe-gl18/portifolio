import { useState } from "react";
import styles from "./Navbar.module.css";
export default function NavBar({
  scrollIntoAboutMeRef,
  scrollIntoProjectsRef,
}) {
  const [showNavbar, setShowNavbar] = useState(false);
  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo/logo.png" alt="logo" />
      </div>
      <ul
        className={
          showNavbar ? styles.navbar_items_active : styles.navbar_items
        }
      >
        <li onClick={scrollIntoAboutMeRef}>About me</li>
        <li onClick={scrollIntoProjectsRef}>Projects</li>
      </ul>
      <div className={styles.menu} onClick={handleShowNavbar}>
        <img src="/icons/menu.png" alt="logo" />
      </div>
    </nav>
  );
}
