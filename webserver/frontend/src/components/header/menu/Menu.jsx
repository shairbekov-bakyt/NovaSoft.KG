import React, {useId, useState} from 'react';
import './menu.scss'

const Menu = ({headerList}) => {
    const [opened, setOpened] = useState(true)
    const listItemId = useId()
    return (
        <>
            <button className={'burger'}>
                |||
            </button>
            {opened &&
                <div className={'header__menu'}>
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
                    <div className={'consultation'}>
                        <p>
                            Нужна консультация?
                        </p>
                        <a href={'tel: +996 995 123 130'}>
                            +996 995 123 130
                        </a>
                    </div>
                </div>
            }
        </>
    );
};

export default Menu;