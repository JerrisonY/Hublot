import './BackToTop.scss'
import { useState, useEffect } from 'react';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = 1300 < currentScrollPos;

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

    }, [windowInnerWidth]);

  return (
    <div 
        className={`back-top-c ${visible ? 'visible' : 'hidden'}`}
    >
        <p>back to top</p>
        <i class="fa-solid fa-chevron-up"></i>
    </div>
  )
}

export default BackToTop