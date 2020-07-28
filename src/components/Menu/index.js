import React from 'react';
import Logo from '../../assets/images/Logo.png'
import './Menu.css';
import ButtonLink from '../components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
            <img src={Logo} alt="Logo" className="Logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                
            </ButtonLink>
        </nav>
    )
}

export default Menu;