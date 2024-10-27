import styles from "./Navbar.module.css"
import React, {useState} from "react";
import {getImageUrl} from "../../utils"

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Ignition</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn} src={menuOpen? getImageUrl("navbar/closeIcon.png"): getImageUrl("navbar/menuIcon.png")} alt="menu-button"
          onClick={()=>setMenuOpen(!menuOpen)}/>
  
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`} onClick={()=>setMenuOpen(false)}>
              
                <li><a href="#about">About</a></li>
                <li><a href="#Dept">Departments</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
