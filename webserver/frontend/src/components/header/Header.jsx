import React, { useId } from "react";
import { useState } from "react";
import "./header.scss";
import LanguageMenu from "./languageMenu/LanguageMenu";
import Menu from "./menu/Menu";
import Contact from "./contact/Contact";
import { ReactComponent as Logo } from "../../images/icons/logo.svg";


const Header = () => {
  const headerList = [
    {
      name: "About us",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Contacts",
      url: "/contacts",
    },
  ];
  const listItemId = useId();

  const [openMenu, setOpenMenu] = useState(false);
  const [consultation, setConsultation] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(true)
    document.body.style.overflow = 'hidden'
  }
  const openConsultationHandler = () => {
    setConsultation(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMenuHandler = () => {
    setOpenMenu(false)
    document.body.style.overflow = 'visible'
  }
  const closeConsultationHandler = () => {
    setConsultation(false)
    document.body.style.overflow = 'visible'
  }

  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className="logo">
          <Logo className="logo__icon" />
          <p className="logo__text">NovaSoft</p>
        </div>
        <ul className={"header__list"}>
          {headerList.map((item, index) => (
            <li className={"header__item"} key={`${listItemId}__${index}`}>
              <button type={"button"}>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="header__setting">
          <LanguageMenu />
          <div
            className="list__consultation"
            onClick={openConsultationHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="btn__burger" onClick={openMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Menu headerList={headerList} openMenu={openMenu} onClose={closeMenuHandler}/>
        <Contact consultation={consultation}  onClose={closeConsultationHandler} />
      </div>
    </div>
  );
};

export default Header;
