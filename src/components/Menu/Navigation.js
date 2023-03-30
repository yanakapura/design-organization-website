import { Link } from "react-router-dom";
import "./Navigation.scss";

import img1 from "../../lib/img1.jpg";
import { CSSTransition } from "react-transition-group";
import Header from "../Header/Header";

const menuLinks = [
  { name: "Главная", image: img1, path: "/" },
  { name: "О нас", image: img1, path: "/about" },
  { name: "Услуги", image: img1, path: "/services" },
  { name: "Проекты", image: img1, path: "/projects" },
  { name: "Контакты", image: img1, path: "/contacts" },
];

const Navigation = (props) => {
  const menuItems = menuLinks.map((item) => (
    <li key={item.name}>
      <div className="menu__image">
        <img src={item.image} />
      </div>
      <div className="menu__link">
        <Link to={item.path} replace>
          {item.name}
        </Link>
      </div>
    </li>
  ));

  return (
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.showMenu}
        timeout={500}
        classNames="menu"
      >
        <div className="menu">
          <Header showMenu={false}/>
          <nav>
            <ul>{menuItems}</ul>
          </nav>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navigation;
