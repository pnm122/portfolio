import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header({selected}) {

  const setHeaderDisplay = e => {
    let header = document.getElementById(styles.headerOuter);
    if(
      (!header.classList.contains(styles.scrolledHeader) && window.scrollY > 20) ||
      (header.classList.contains(styles.scrolledHeader) && !(window.scrollY > 20))
    ) {
      header.classList.toggle(styles.scrolledHeader);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setHeaderDisplay);

    return () => {
      window.removeEventListener('scroll', setHeaderDisplay);
    }
  }, [])

  if(selected == null) selected = -1;

  return (
    <header id={styles.headerOuter}>
      <div className={`container ${styles.headerInner}`}>
        <Link to="/" id={styles.name}>Pierce Martin</Link>
        <div id={styles.links}>
          <a href="#" id={selected == 0 ? styles.selected : null}><span>Resume</span></a>
          <Link to="/projects" id={selected == 1 ? styles.selected : null}><span>Projects</span></Link>
          <a href="#contact" id={selected == 2 ? styles.selected : null}><span>Contact Me</span></a>
        </div>
      </div>
    </header>
  )
}
