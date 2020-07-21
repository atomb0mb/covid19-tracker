import React from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';

const Footer = () => {


    return (
      
      <footer className={styles.footer}>
        <div className={styles.footer__addr}>
          <h1 className={styles.footer__logo}>Covid-19 Tracker</h1>
              
          <h2>The app covid-19 tracker is here to help to spread awareness by visualizing the data.</h2>
          
        </div>
        
        <ul className={styles.footer__nav}>
          <li className={styles.nav__item}>
              
            {/* <h2 className={styles.nav__title}>Social Media</h2>
      
            <ul className={styles.nav__ul}>
              <li>
                <a href="#">Linkedin</a> */}
              {/* </li> */}
      
              {/* <li>
                <a href="#">Facebook</a>
              </li> */}
                  
              {/* <li>
                <a href="#">Alternative Ads</a>
              </li> */}
            {/* </ul> */}
          </li> 
          
          <li className={cx(styles.nav__item, styles.nav__itemex)}>
            {/* <h2 className={styles.nav__title}>My Site</h2> */}
            
            {/* <ul className={cx(styles.nav__ul, styles.nav__ulex)}> */}
              {/* <li>
                <a href="#">Personal Website</a>
              </li> */}
              
              {/* <li>
                <a href="#">Github</a>
              </li> */}
              
              {/* <li>
                <a href="#">Digital Signage</a>
              </li>
              
              <li>
                <a href="#">Automation</a>
              </li>
              
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              
              <li>
                <a href="#">IoT</a>
              </li> */}
            {/* </ul> */}
            
          </li>
          
          <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>Sites</h2>
            
            <ul class="nav__ul">
              <li>
                <a href="https://cwng.webflow.io/" target="_blank" rel="external">About Me</a>
              </li>
              
              <li>
                <a href="https://www.linkedin.com/in/cwng-7135/" target="_blank" rel="external">LinkedIn</a>
              </li>
              
              {/* <li>
                <a href="#">Sitemap</a>
              </li> */}
            </ul>
          </li>
        </ul>
        
        <div className={styles.legal}>
          {/* <p>&copy; 2020 Something. All rights reserved.</p> */}
          <span>Made with <span className={styles.heart}>♥</span> by cwng</span>
          <div className={styles.legal__links}>
            {/* <span>Made with <span className={styles.heart}>♥</span> by atomb0mb</span> */}
          </div>
        </div>
        
      </footer>);
}

export default Footer;

