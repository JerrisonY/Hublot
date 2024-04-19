import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'

import './NavBar.scss'

function NavBar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            if (window.scrollY >= 200)
                setVisible(visible);
        };

        const handleResize = () => {
            setWindowInnerWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };

    }, [prevScrollPos, windowInnerWidth]);
    
    const modal = document.querySelector('.modal');

  return (
    <>
        <nav 
            className={`nav-container ${visible ? 'visible' : 'hidden'} 
            ${(window.scrollY > 400) ? 'default-nav' : ''}`}
        >
            <NavLink className='nav-item-left' to='/'>+ contact us</NavLink>
            <NavLink className='nav-middle' to='/'>
                {window.innerWidth >= 900 ? (
                    <img src="public/hublotFullLogo.svg" alt="" />
                ) : 
                (
                    <img src='public/hublot.svg' alt='' />
                )}
            </NavLink>
            {window.innerWidth >= 900 ? (
                <div className='nav-item-right'>
                    <NavLink to='/'>watches</NavLink>
                    <NavLink to='/'>our world</NavLink>
                    <NavLink to='/'>boutiques</NavLink>
                </div>
            ) :
            (
                <Hamburger 
                    size={25}
                    distance='sm'
                    toggled={modalVisible}
                    toggle={setModalVisible}
                />
            )}
        </nav>
        <div className={`modal ${modalVisible ? 'visible' : ''}`}>
            <NavLink to='/'>watches</NavLink>
            <NavLink to='/'>our world</NavLink>
            <NavLink to='/'>boutiques</NavLink>
        </div>
    </>
  )
}

export default NavBar