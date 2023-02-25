import React from 'react'
import Container from '../../../hooks/container/Container'
import './Category.scss'
import { Link } from 'react-router-dom'
import useFetchData from '../../../hooks/useFetchData'
import { useTranslation } from 'react-i18next'

const Category = () => {
    const [data, loader] = useFetchData('/categories')
    const { t } = useTranslation()
    if (data.length > 0) {
        return (
            <section className=' category-section'>
                <center>
                    <h3>{t("category_name")}</h3>
                </center>
                <Container>
                    <div className="category-wrapper">
                        {
                            data.slice(0, 6).map((category) => (
                                <div className='category-card' key={category.id}>
                                    <Link to={`/categories/${category.id}`} className='category-link'>
                                        <div className='category-inner'>
                                            <div className='category-box'>
                                                <img className='category-image' src={category.image} alt="" />
                                            </div>
                                            <h4 className='category-title'>{category.name}</h4>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        )
    }
}

export default Category