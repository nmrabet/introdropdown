import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";

function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <Menu />
    </div>
  );
}

export default Navbar;
