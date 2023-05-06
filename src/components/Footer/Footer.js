import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as ContactCircle } from '../../assets/contact-circle.svg';

export default function Footer() {
  return (
    <>
      <div className="container two-columns fadeIn">
        <div className="circle-title-wrapper"><ContactCircle width={200} className="rotate" /></div>
        <div className={`flex ${styles.contactWrapper}`}>
          <div>
            <a href="mailto:pnmartin02@gmail.com" className="with-gradient">
              <p>
                <span>pnmartin02</span>
                <span>@gmail.com</span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div id={styles.footer}>
        <div className="container">
          
        </div>
      </div>
    </>
  )
}
