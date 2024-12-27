import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png.webp'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const navigation = useNavigate();

    const goCart = () => {
        navigation("/basket");
    }
    const goWishlist = () => {
        navigation("/wishlist");
    }

  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <a href="/"><img src={logo} alt="logo" /></a>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="" onClick={goCart}>BASKET</a></li>
                <li><a href="" onClick={goWishlist}>WISHLIST</a></li>
                <li><a href="">FASHION</a></li>
                <li><a href="">TEAM</a></li>
                <li><a href="">PAGES</a></li>
            </ul>
            <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
  )
}

export default Header