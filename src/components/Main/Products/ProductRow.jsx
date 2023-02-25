import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiShoppingCart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiTwotoneHeart } from 'react-icons/ai'
import './Product.scss'

const ProductRow = ({ data }) => {
    const dispatch = useDispatch()
    const wishlistData = useSelector(state => state)

    function addWishlist(product) {
        dispatch({ product: product, type: "ADD_TO_WISHLIST" })
    }
    function removeWishlist(product) {
        dispatch({ product: product.id, type: "REMOVE_WISHLIST" })
    }

    return (
        data.map(product =>
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
                        <div className='product__card--footer'>
                            <CiShoppingCart className='product__card-icons' />
                            {wishlistData.like.likedProducts.find(p => p?.id === product?.id) ? <AiTwotoneHeart onClick={() => removeWishlist(product)} className=' heart-icon product__card-icons heart-fill-icon ' /> : <AiOutlineHeart onClick={() => addWishlist(product)} title='Saralanganlarga' className='heart-icon product__card-icons' />}
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}

export default ProductRow