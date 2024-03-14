import './NavBar.scss'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="nav-container">
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