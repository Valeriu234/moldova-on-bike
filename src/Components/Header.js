import React from 'react';
import logo from '../Assets/logo/Union.svg'
import romanian from '../Assets/Images/header-images/romania.png'
import arrowBottom from '../Assets/Images/header-images/arow bottom.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
            <img src={logo} alt=""/>
                <nav>
                    <ul className='nav-links'>
                        <li><a href="">Găsește traseul</a></li>
                        <li><a href="">Despre noi</a></li>
                        <li><a href="">Contacte</a></li>
                        <li><img className='language-image' src={romanian} alt=""/> <a href="">Ro</a><img className='arrow-bottom' src={arrowBottom} alt=""/> </li>
                        <button className='download'>Descarca ghidul</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;