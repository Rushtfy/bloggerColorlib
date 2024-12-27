import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import catalogueOne from '../../assets/c1.jpg'
import catalogueTwo from '../../assets/c2.jpg'
import catalogueThree from '../../assets/c3.jpg'
import Layout from '../../components/layout/Layout'
import Card from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productsSlice'

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(8);

    const lastIndexItem = currentPage * itemPerPage;
    const firstIndexItem = lastIndexItem - itemPerPage;

    const products = useSelector((state) => state.products.products) || [];
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(getProductThunk());
    }, []);

    if (loading) return <p>Yüklənir...</p>
    if (error) return <p>Xəta baş verdi</p>

    const currentProducts = products.slice(firstIndexItem, lastIndexItem);

    let pages = [];

    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        pages.push(i);
    }


    return (
        <Layout>
            <div className={styles.sectionOne}>
                <div className={styles.containerOne}>
                    <h1>A Discount Toner Cartridge Is Better Than Ever.</h1>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.containerTwo}>
                    <div className={styles.titlesOne}>
                        <h1>Latest News from all categories</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                    </div>
                    <div className={styles.adsCards}>
                        <div className={styles.individualCard}>
                            <img src={catalogueOne} alt="" />
                            <p>10 Jan 2018</p>
                            <h3>What Makes A Hotel Boutique</h3>
                        </div>
                        <div className={styles.individualCard}>
                            <img src={catalogueTwo} alt="" />
                            <p>10 Jan 2018</p>
                            <h3>What Makes A Hotel Boutique</h3>
                        </div>
                        <div className={styles.individualCard}>
                            <img src={catalogueThree} alt="" />
                            <p>10 Jan 2018</p>
                            <h3>What Makes A Hotel Boutique</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionThree}>
                <div className={styles.containerThree}>
                    {currentProducts && currentProducts.map(item => <Card item={item} />)}
                </div>
                <div className={styles.pageNums}>
                    {pages && pages.map(item => {
                        return <button style={currentPage == item ? {backgroundColor: "gray"} : {backgroundColor: "black"}} onClick={() => setCurrentPage(item)}>{item}</button>
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Home