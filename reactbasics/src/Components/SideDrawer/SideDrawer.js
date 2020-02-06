import React from "react";
import styles from "./SideDrawer.css";
import Logo from "../Logo/logo";
import NavigItems from "../Navigation/NavigationItems/NavigationItems";
const sideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
