import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../../hooks/container/Container'
import Loader from '../../../hooks/loader/Loader'
import useFetchData from '../../../hooks/useFetchData'
import Product from '../Products/Product'

const SingleCategory = () => {
    const categoryId = useParams()
    const [data, isLoader] = useFetchData(`/products/?categoryId=${categoryId.id}&offset=0&limit=12`)
    console.log(data)
    return (
        <Container>
            {!isLoader ? <div className='category-products'><Product data={data} /> </div> : <Loader />}
        </Container>
    )
}

export default SingleCategory