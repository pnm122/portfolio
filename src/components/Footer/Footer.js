import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as ContactCircle } from '../../assets/contact-circle.svg';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="container two-columns fadeIn">
        <div className="circle-title-wrapper"><ContactCircle width={200} className="rotate" /></div>
        <div className={`flex ${styles.contactWrapper}`}>
          <div>
            <p>Let's chat!</p>
            <a href="mailto:pnmartin02@gmail.com" className="with-gradient" id="contact">
              <p>
                <span>pnmartin02</span>
                <span>@gmail.com</span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div id={styles.footer}>
        <div id={styles.innerFooter} className="container fadeIn">
          <div id={styles.links}>
            <div>
              <a href="https://github.com/pnm122" target="_blank">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/pierce-martin-02/" target="_blank">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <a className="large-anchor" id={styles.src} href="https://github.com/pnm122/portfolio" target="_blank">View this portfolio's source <FaArrowRight /></a>
          <span id={styles.copyright}>© 2023</span>
        </div>
      </div>
    </>
  )
}
