import React from 'react'
import Container from '../../../hooks/container/Container'
import './Product.scss'
import useFetchData from '../../../hooks/useFetchData'
import Loader from '../../../hooks/loader/Loader'
import Product from './Product'
import { useTranslation } from 'react-i18next'


const Products = () => {
    const [data, loader] = useFetchData('products?offset=0&limit=12')
    const { t } = useTranslation()
    if (data.length > 0) {
        return (
            <section className='products-section'>
                {!loader ? <Container>
                    <center>
                        <h3 className='product-main-title'>{t('product_name')}</h3>
                    </center>
                    <div className="products-wrapper">
                        <Product data={data} />
                    </div>
                </Container> : <Loader />}
            </section >
        )
    }
}

export default Products