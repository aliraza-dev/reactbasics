import React from "react";
import BurgerLogo from "../../static/media/burger-logo.png";
import styles from "./Logo.css";
const Logo = props => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={BurgerLogo} alt="Please Add Some Logo" />
  </div>
);

export default Logo;
