import React from "react";
import styles from "./NavigItem.css";
const navigatioItem = props => {
  return (
    <li className={styles.NavigItem}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigatioItem;
