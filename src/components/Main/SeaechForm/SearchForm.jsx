import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Container from '../../../hooks/container/Container'
import './SearchForm.scss'
import instance from '../../../api/instance'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const SearchForm = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')
    const [data, setData] = useState([])


    function getSearchData(e) {
        e.preventDefault()
        window.location.pathname = `/search/${value}`
    }

    function getSuggested(e) {
        setValue(e.target.value)
        e.preventDefault();
        instance.get(`products?title=${value}&offset=0&limit=10`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }

    return (
        <div >
            <Container>
                <div className='search-box'>
                    <form onSubmit={getSearchData} >
                        <div className='search-form' >
                            <BiSearch className='search-icon' />
                            <input onChange={getSuggested} type="text" placeholder={`${t('input_placeholder')}`} />
                            {data.length > 0 && value ? < div className='search-suggestion'>
                                {
                                    data.map(suggestion =>
                                        <Link key={suggestion.id} className='suggestion-title' to={`/product/${suggestion.id} `}>
                                            <div className='suggestion-box'>
                                                <p className='suggestion-title-main'>{suggestion.title}</p>
                                                <small className='suggestion-category'>{suggestion.category.name}</small>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div> : <></>}
                        </div>
                        <button className='search-btn' type='submit'>
                            <p>{t('form_btn')}</p>
                            <BiSearch className='search-btn-icon' />
                        </button>
                    </form>
                </div>
            </Container >
        </div >
    )
}

export default SearchForm