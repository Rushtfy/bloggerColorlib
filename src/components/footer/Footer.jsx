import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.componentOne}>
          <h4>PROMO</h4>
          <a href="">Finding Your Perfect Shirts This Summer</a>
          <p>Promo from July 15 — 25, 2019</p>
        </div>
        <div className={styles.componentTwo}>

        </div>
        <ul>
          <h4>QUICK LINKS</h4>
          <li><a href="">Sell online</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Shopping cart</a></li>
          <li><a href="">Store builder</a></li>
        </ul>
        <ul>
          <li><a href="">Sell online</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Shopping cart</a></li>
          <li><a href="">Store builder</a></li>
        </ul>
        <ul>
          <li><a href="">Sell online</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Shopping cart</a></li>
          <li><a href="">Store builder</a></li>
        </ul>
        <div className={styles.componentThree}>
          <h4>CONTACT INFO</h4>
          <p>203 Fake St. Mountain View, San <br /> Francisco, California, USA</p>
          <p>+2 392 3929 210</p>
          <p>emailaddress@domain.com</p>
        </div>
      </div>
      <p className={styles.copyright}>Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
    </div>
  )
}

export default Footer