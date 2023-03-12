import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {

  return (
    <header className="header">
      <div>
       {!props.menuIsOpen && <Link to="/projects">Progects</Link>}
      </div>
      <div className="header__logo">
        <Link to="/">CM Проект</Link>
      </div>
      <div>
        {!props.menuIsOpen && <Link to="/menu">Menu</Link>}
        {props.menuIsOpen && <Link to="/">Close</Link>}
        {/* <a >Menu</a> */}
      </div>
    </header>
  );
};

export default Header;
