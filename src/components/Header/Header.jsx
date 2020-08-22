import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://freesvg.org/img/logo-generic.png" alt="Company Logo"/>
    </header>);
}

export default Header;