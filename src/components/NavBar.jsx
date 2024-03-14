import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './NavBar.scss'

function NavBar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    
  return (
    <nav 
        className={`nav-container ${visible ? 'visible' : 'hidden'} 
        ${(window.scrollY > 100) ? 'default-nav' : ''}`}
    >
        <NavLink to='/'>
            <img src="public/hublot.svg" alt="" />
        </NavLink>
        <div>
            <NavLink to='/'>
                watches
            </NavLink>
            <NavLink to='/'>
                our world
            </NavLink>
            <NavLink to='/'>
                boutiques
            </NavLink>
        </div>
    </nav>
  )
}

export default NavBar