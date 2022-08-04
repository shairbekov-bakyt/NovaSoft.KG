import React from 'react';
import { ReactComponent as Telephone } from "../../../images/icons/telephone.svg";
import { ReactComponent as Mail } from "../../../images/icons/mail.svg";
import { ReactComponent as Logo } from "../../../images/icons/logo.svg";
import { ReactComponent as Linkidink } from "../../../images/icons/linkiding.svg";
import { ReactComponent as Telegram } from "../../../images/icons/telegram.svg";
import { ReactComponent as Instagram } from "../../../images/icons/instagram.svg";
import './Contact.scss'

const Contact = ({consultation,onClose}) => {
    return (
      <div className={`block__consultation ${consultation ? "active" : ""}`}>
        <div className="about__head">
          <div className="logo">
            <Logo className="logo__icon" />
            <p className="logo__text">NovaSoft</p>
          </div>
          <button className="about__close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="about__content">
          <p className="about__title">About</p>
          <p className="about__descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            laborum molestiae sequi quae provident nisi repudiandae illo est?
            At, odio?
          </p>
        </div>
        <button className="about__btn">Написать</button>
        <div className="about__contact">
          <p className="about__title">Contact Information</p>
          <div>
            <div className="about__block">
              <Telephone className="telephone" />
              <a href="tel:++990-123-4567">+990-123-4567</a>
            </div>
            <div className="about__block">
              <Mail className="mail" />
              <a href="mailto:koze@gmail.com">koze@gmail.com</a>
            </div>
          </div>
          <div className="about__sociaMedia">
            <a href="#" className="icon__link-media">
              <Linkidink className="icon__media" />
            </a>
            <a href="#" className="icon__link-media">
              <Telegram className="icon__media" />
            </a>
            <a href="#" className="icon__link-media">
              <Instagram className="icon__media" />
            </a>
          </div>
        </div>
        <div className="about__form">
          <p className="about__title">Ready to Get Started?</p>
          <form action="">
            <input
              className="form__input"
              type="text"
              placeholder="Your name"
            />
            <input
              className="form__input"
              type="text"
              placeholder="Your email address"
            />
            <input
              className="form__input"
              type="text"
              placeholder="Your phone number"
            />
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              className="form__textarea"
              placeholder="Write your message..."
            ></textarea>
            <button className="about__btn">Send</button>
          </form>
        </div>
      </div>
    );
};

export default Contact;