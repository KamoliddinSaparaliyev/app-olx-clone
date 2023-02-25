import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { AiTwotoneHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Product.scss'

const Product = ({ data }) => {
    const wishlistData = useSelector(state => state)
    const dispatch = useDispatch()

    function addWishlist(product) {
        dispatch({ product, type: "ADD_TO_WISHLIST" })
    }

    function removeWishlist(product) {
        dispatch({ product: product.id, type: "REMOVE_WISHLIST" })
        console.log(wishlistData.like.likedProducts)
    }

    return (
        data.map(product =>
            <div className='product-inner' key={product.id}>
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
                        <FiShoppingCart title='Savat' className='heart-icon basket-icon' />
                        {wishlistData.like.likedProducts.find(p => p.id === product.id) ? <AiTwotoneHeart onClick={() => removeWishlist(product)} className=' heart-icon heart-fill-icon ' /> : <AiOutlineHeart onClick={() => addWishlist(product)} title='Saralanganlarga' className='heart-icon' />}
                    </div>
                </div>
            </div>
        )

    )
}

export default Product