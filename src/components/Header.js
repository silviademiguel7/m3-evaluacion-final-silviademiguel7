import React from 'react';
import logo from '../images/title-logo.png';
import './Header.scss';

const Header = ()=> {
        return (
            <header className="header">
                <h1 className="tittle-pagpe"><img src={logo} alt="titulo de la pagina" /></h1>
            </header>
        );
    }

export default Header;