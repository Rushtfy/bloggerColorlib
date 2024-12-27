import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';

const Cart = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/basket")
            .then(res => {
                setProduct(res.data);
            });
    }, []);

    return (
        <Layout>
            <div className={styles.sectionTwo}>
                <div className={styles.containerProducts}>
                    <h1>Shopping Cart</h1>
                    <div className={styles.items}>
                        {product && product.map(item => <Card item={item} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart