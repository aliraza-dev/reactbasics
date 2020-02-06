import React from "react";
import styles from "./NavigItems.css";
import NavigItem from "./NavigationItem/NavigationItem";
const navigationItems = () => {
  return (
    <ul className={styles.NavigItem}>
      <NavigItem link="/" active={true}>
        Burger
      </NavigItem>
      <NavigItem link="/">Checkout</NavigItem>
    </ul>
  );
};

export default navigationItems;
