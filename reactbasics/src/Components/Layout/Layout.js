import React from "react";
import Aux from "../../HOC/aux";
import styles from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
