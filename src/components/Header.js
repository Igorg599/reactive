import React from 'react';
import Logo from '../assets/img/Frame.png';
import User from '../assets/img/User.png';



function Header() {
  return (
    <div className="header">
        <div className="header__content">
            <img src={Logo} alt='logo'/>
            <div className="header__service">Услуги и сервисы Пермского края</div>
            <img className="header__user" src={User} alt='user'/>
            <h3>Константинопольский К.К</h3>
            <p>Выйти</p>
        </div>
    </div>
  );
}

export default Header;