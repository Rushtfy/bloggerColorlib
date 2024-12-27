import React, { useEffect, useState } from 'react'
import styles from './Wishlist.module.scss'
import axios from 'axios';
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';

const Wishlist = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/wishlist")
            .then(res => {
                setProduct(res.data);
            });
    }, []);


    return (
        <Layout>
            <div className={styles.sectionTwo}>
                <div className={styles.containerProducts}>
                    <h1>Wishlist</h1>
                    <div className={styles.items}>
                        {product && product.map(item => <Card item={item} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Wishlist