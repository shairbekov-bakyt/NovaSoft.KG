import React, {useId} from 'react';
import './header.scss'
import LanguageMenu from "./languageMenu/LanguageMenu";
import Menu from "./menu/Menu";

const Header = () => {
    const headerList = [
       {
           name: 'About us',
           url: '/about'
       },
       {
           name: 'Projects',
           url: '/projects'
       },
       {
           name: 'Services',
           url: '/services'
       },
       {
           name: 'Blog',
           url: '/blog'
       },
       {
           name: 'Contacts',
           url: '/contacts'
       },
   ]
    const listItemId = useId()

    return (
        <div className={'header'}>
            <div className={'container'}>
                <Menu headerList={headerList}/>
                <button className={'logo'}>
                    NOVASOFT
                </button>
                <ul className={'header__list'}>
                    {
                        headerList.map((item, index) =>
                        <li className={'header__item'}
                            key={`${listItemId}__${index}`}
                        >
                            <button type={'button'}>
                                <span>{item.name}</span>
                            </button>
                        </li>
                        )
                    }
                </ul>
                <LanguageMenu/>
                <div className={'consultation'}>
                    <p>
                        Нужна консультация?
                    </p>
                    <a href={'tel: +996 995 123 130'}>
                        +996 995 123 130
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;