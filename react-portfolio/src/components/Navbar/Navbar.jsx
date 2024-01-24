import styles from './Navbar.module.css'
import { useState } from 'react';
import { getImageUrl } from '../../utils';

export default function Navbar() {
    const [toggleMenu, settoggleMenu] = useState(false);
    return(
        <>
            <nav className={styles.navbar}>
                <a className={styles.title} href="/">Portfolio</a>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src={ toggleMenu ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                        alt="menu-button"
                        onClick={() => settoggleMenu(!toggleMenu)} 
                    />
                    <ul className={`${styles.menuItems} ${toggleMenu && styles.menuOpen}`}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}