import React, { useId } from "react";
import "./menu.scss";
import { ReactComponent as Logo } from "../../../images/icons/logo.svg";

const Menu = ({ headerList, openMenu, onClose }) => {
  const listItemId = useId();
  return (
    <>
      {openMenu ? (
        <div className={`mobile__menu ${openMenu ? "mobile_active" : ""}`}>
          <div className="about__head">
            <div className="logo">
              <Logo className="logo__icon" />
              <p className="logo__text">NovaSoft</p>
            </div>
            <div className="btns__block">
              <p>ENG ^</p>
              <button className="about__close" onClick={onClose}>
                X
              </button>
            </div>
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
        </div>
      ) : null}
    </>
  );
};

export default Menu;
