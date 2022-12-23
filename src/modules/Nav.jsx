import React from "react";

import { NavLink } from "react-router-dom";
import { routes } from "../routes";

const Nav = () => {
  return (
    <nav>
      {routes.map((route) => (
        <NavLink key={route.key} to={route.path}>
          {route.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
