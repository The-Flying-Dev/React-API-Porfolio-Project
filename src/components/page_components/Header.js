import React from 'react';
import logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className='center'>
            <img className='logo' src={logo} alt='logo' />
        </header>
    )
};


export default Header;