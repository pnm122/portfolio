import React from 'react';
import styles from './Header.module.css';

export default function Header({selected}) {
  if(selected == null) selected = -1;

  return (
    <header className={styles.headerOuter}>
      <div className={`container ${styles.headerInner}`}>
        <a href="#" id={styles.name}>Pierce Martin</a>
        <div id={styles.links}>
          <a href="#" id={selected == 0 ? styles.selected : null}><span>Resume</span></a>
          <a href="#" id={selected == 1 ? styles.selected : null}><span>Projects</span></a>
          <a href="#" id={selected == 2 ? styles.selected : null}><span>Contact Me</span></a>
        </div>
      </div>
    </header>
  )
}
