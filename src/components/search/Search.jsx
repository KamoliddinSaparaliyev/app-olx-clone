import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import instance from '../../api/instance'
import Loader from '../../hooks/loader/Loader'
import MultiRangeSlider from '../../hooks/MultiSlider/MultiSlider'
import useFetchData from '../../hooks/useFetchData'
import ProductRow from '../Main/Products/ProductRow'
import './Search.scss'

function Search() {
    const searchValue = useParams()
    let [data, isLoading] = useFetchData(`/products/?title=${searchValue.productName}`)
    const [filterData, setFilterData] = useState([])

    function filetrData(min, max) {
        instance.get(`/products/?title=${searchValue.productName}&price_min=${min}&price_max=${max}`)
            .then(res => setFilterData(res.data))
            .catch(err => console.error(err))
    }

    let prices = []
    data.map((data) => {
        prices.push(data.price)
    })

    prices.sort((a, b) => a - b)
    if (data.length > 0) {
        return (
            <Container>
                {!isLoading ?
                    <div>
                        <div className='slider-box'>
                            <MultiRangeSlider
                                min={prices[0]}
                                max={prices[prices.length - 1]}
                                onChange={({ min, max }) => filetrData(min, max)}
                            />
                        </div>
                        <div className='serch-results'>
                            <ProductRow data={filterData.length > 0 ? filterData : data} />
                        </div>
                    </div> : <Loader />}
            </Container>
        )
    } else {
        return <center>
            <h1 className='error-message'>NO DATA</h1>
        </center>
    }
}

export default Search