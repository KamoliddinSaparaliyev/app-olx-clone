import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../../hooks/container/Container'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from 'react-icons/ci'

const Wishlist = () => {
    const wishlistData = useSelector(state => state)
    console.log(wishlistData.like.likedProducts);

    return (
        <div>
            <Container >
                {
                    wishlistData.like.likedProducts.map(product =>
                        <div className='product__card' key={product.id}>
                            <Link href='#top' className='product__card--box' to={`/product/${product.id}`} >
                                {product.images[0] ? <img className='product__card--img' src={product.images[0]} alt="" /> : <img className='product-image' src='https://placeholder.com/assets/images/150x150-2-500x500.png' alt="" />}
                            </Link>
                            <div className='product__card--inner'>
                                <div className='product__card--header'>
                                    <h4 className='product__card--title'>{product.title}</h4>
                                    <strong className='product__card--price'>${product.price}</strong>
                                </div>
                                <div className='product__card--main'>
                                    <p className='product__card--description'>{product.description}</p>
                                    <CiShoppingCart style={{ marginLeft: "auto" }} className='product__card-icons' />
                                </div>
                            </div>
                        </div>)
                }
            </Container>
        </div>
    )
}

export default Wishlist