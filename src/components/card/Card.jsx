import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postProductThunk, wishlistProductThunk } from '../../redux/reducers/productsSlice'

const Card = ({ item }) => {
    
    const dispatch = useDispatch();

    const [wishBool, setWishBool] = useState(false);
    const [cartBool, setCartBool] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/basket")
            .then(res => {
                let existing = res.data.find(element => element.id == item.id);
                setCartBool(existing);
            });
        axios.get("http://localhost:5000/wishlist")
            .then(res => {
                let existing = res.data.find(element => element.id == item.id);
                setWishBool(existing);
            });
    }, []);


    const addCart = () => {
        dispatch(postProductThunk(item));
    }

    const addWishlist = () => {
        dispatch(wishlistProductThunk(item));
    }


    return (
        <div className={styles.item} id={`${item.id}`}>
            <img src={item.thumbnail} alt="Product Image" />
            <p className={styles.title}>{item.title}</p>
            <p>$ {item.price}</p>
            <div className={styles.cartText} onClick={addCart}>
                <span>{cartBool ? "Added" : "Add to Cart"}</span>
            </div>
            <div className={styles.wishlistBtn} onClick={addWishlist}>
                <FontAwesomeIcon icon={wishBool ? fasFaHeart : farFaHeart} />
            </div>
        </div>
    )
}

export default Card