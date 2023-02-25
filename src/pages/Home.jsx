import React from 'react'
import Category from '../components/Main/Category/Category'
import Products from '../components/Main/Products/Products'
import SearchForm from '../components/Main/SeaechForm/SearchForm'
import Loader from '../hooks/loader/Loader'
import useFetchData from '../hooks/useFetchData'

export default function Home() {
  const [data, isLoading] = useFetchData('/categories')

  if (!isLoading) {
    return (<>
      <SearchForm />
      <Category />
      <Products />
    </>
    )
  } else {
    return <Loader />
  }
}
