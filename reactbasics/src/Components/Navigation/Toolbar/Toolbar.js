import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/logo";
import Navigation from "../NavigationItems/NavigationItems";
const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <Navigation />
      </nav>
    </header>
  );
};
export default toolbar;
