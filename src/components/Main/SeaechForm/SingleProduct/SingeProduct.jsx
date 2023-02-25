import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams, Link } from 'react-router-dom'
import Container from '../../../../hooks/container/Container'
import useFetchData from '../../../../hooks/useFetchData'
import { FreeMode, Pagination } from "swiper";
import Carousel from 'react-bootstrap/Carousel';
import Loader from '../../../../hooks/loader/Loader'
import { AiOutlineHeart } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import './SingleProduct.scss'
import "swiper/css";


function SingeProduct() {
    const singleProductId = useParams()
    function addWishlist(product) {

    }
    const [data, loader] = useFetchData(`/products/${singleProductId.id}`)
    const [recData, load] = useFetchData(`/products/?categoryId=${data.category && data.category.id}&offset=0&limit=12`)
    const { t } = useTranslation()
    if (data.title) {
        return (
            <div className='single__card' id='top'>
                {!loader ?
                    <Container >
                        <div className='single__wrapper'>
                            <div className='single__box'>
                                <Carousel variant="dark" >
                                    {data.images && data.images.map(src =>
                                        <Carousel.Item key={src}>
                                            <img
                                                className=" single__image d-block"
                                                src={src}
                                                alt={data.title}
                                            />
                                        </Carousel.Item>)}
                                </Carousel>
                            </div>
                            <div className='single__info'>
                                <div>
                                    <h3 className='single__title'>{data.title}</h3>
                                    <p className='single__desc'>{data.description}</p>
                                    <p className='single__price'>{data.price}$</p>
                                </div>
                                <button className='add__btn'>{t('wishlist_name')}</button>
                            </div>
                        </div >
                        <Swiper slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]} className="mySwiper rec__products">
                            {
                                recData.map(product =>
                                    <SwiperSlide className='product-inner' key={product.id}>
                                        <Link href='#top' className='product-box--image' to={`/product/${product.id}`} >
                                            {product.images[0] ? <img className='product-image' src={product.images[0]} alt="" /> : <img className='product-image' src='https://placeholder.com/assets/images/150x150-2-500x500.png' alt="" />}
                                        </Link>
                                        <h4 className='product-title'>{product.title}</h4>
                                        <div title={product.description} className='product-desc'>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className='product-info'>
                                            <strong>${product.price}</strong>
                                            <div>
                                                <AiOutlineHeart onClick={() => addWishlist(product)} title='Saralanganlarga' className='heart-icon' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )

                            }
                        </Swiper>
                    </Container> : <Loader />}
            </div >
        )
    }
}

export default SingeProduct