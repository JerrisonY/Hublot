import React from 'react'
import './Footer.scss'

import { NavLink } from 'react-router-dom'

const services = [
    'NEWSLETTER',
    'JOBS',
    'PRESS',
    'CONTACT US',
    'SERVICES',
    'TRACK AN ORDER',
    'PRIVACY',
    'LEGAL NOTICE & TERMS OF USE',
    'WEBSITE TERMS AND CONDITIONS',
    'ETHICAL COMMITMENT',
    'MSA TRANSPARENCY',
]

const socials = [
    <i class="fa-brands fa-facebook-f"></i>,
    <i class="fa-brands fa-instagram"></i>,
    <i class="fa-brands fa-pinterest"></i>,
    <i class="fa-brands fa-x-twitter"></i>,
    <i class="fa-brands fa-youtube"></i>,
    <i class="fa-brands fa-linkedin"></i>
]

function Footer() {
  return (
    <footer className='footer-c'>
        <div className='footer-logo-c'>
            <img src="public/hublotlightlogo.svg" alt="" />
        </div>
        <div className='footer-services-c'>
            {services.map((service, index) => (
                <>
                    <NavLink to='https://www.hublot.com/en-ca/contact-us'>
                        {service}
                    </NavLink>
                    {index !== services.length - 1 && <span> • </span>}
                </>
            ))}
        </div>
        <div className='footer-socials-c'>
            {socials.map((social, index) => (
                <NavLink to='https://www.hublot.com/en-ca/contact-us'>
                    {social}
                </NavLink>
            ))}
        </div>
        <span className='footer-copyright'><em>© 2024 Hublot - All intellectual property rights reserved</em></span>
    </footer>
  )
}

export default Footer