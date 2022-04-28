import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import { ReactComponent as Close } from "../assets/icon-close-menu.svg";
import { ReactComponent as Up } from "../assets/icon-arrow-up.svg";
import { ReactComponent as Down } from "../assets/icon-arrow-down.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <Logo />
      {!open ? (
        <Menu className="menu-icon" onClick={() => setOpen(true)} />
      ) : (
        <div className="navbar-opener">
          <Close className="menu-icon" onClick={() => setOpen(false)} />
          <ul>
            <li>
              <span>Features</span>
              <Down />
            </li>
            <li>
              <span>Company</span>
              <Down />
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
