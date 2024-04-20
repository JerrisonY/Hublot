import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'

import './NavBar.scss'

import hublotFullLogo from '/hublotFullLogo.svg'
import hublotLogo from '/hublot.svg'

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
            <div className='nav-group-left'>
                <NavLink to='https://www.hublot.com/en-ca' target='_blank' className='border-right'>
                    <i class="fa-regular fa-heart fa-xl"></i>
                </NavLink>
                <NavLink to='https://www.hublot.com/en-ca' target='_blank'>
                    <i class="fa-solid fa-globe fa-xl"></i>
                </NavLink>
            </div>
            <NavLink className='nav-middle' to='https://www.hublot.com/en-ca' target='_blank'>
                {window.innerWidth >= 900 ? (
                    <img src={hublotFullLogo} alt="" />
                ) : 
                (
                    <img src={hublotLogo} alt='' />
                )}
            </NavLink>
            {window.innerWidth >= 900 ? (
                <div className='nav-group-right'>
                    <NavLink to='https://www.hublot.com/en-ca' target='_blank'>
                        watches
                    </NavLink>
                    <NavLink to='https://www.hublot.com/en-ca' target='_blank'>
                        boutiques
                    </NavLink>
                    <NavLink to='https://www.hublot.com/en-ca' target='_blank' className='border-right'>
                        <i class="fa-solid fa-location-dot fa-xl"></i>
                    </NavLink>
                    <NavLink to='https://www.hublot.com/en-ca' target='_blank'>
                        <i class="fa-regular fa-user fa-xl"></i>
                    </NavLink>
                    
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