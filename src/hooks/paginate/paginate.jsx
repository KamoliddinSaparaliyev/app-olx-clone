import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../../api/instance'
import './paginate.scss'

const Paginate = () => {
    const [pages, setPages] = useState(0)
    useEffect(() => {
        instance.get('products')
            .then(res => setPages(res.data.length))
            .catch(err => console.error(err))

    })

    console.log(pages)


    return (
        <div className='pagination'>
            <p></p>
        </div>
    )
}

export default Paginate