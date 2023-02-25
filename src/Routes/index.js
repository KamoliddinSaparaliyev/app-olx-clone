import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import SingleCategory from '../components/Main/Category/SingleCategory'
import SingeProduct from '../components/Main/SeaechForm/SingleProduct/SingeProduct'
import Search from '../components/search/Search'
import Wishlist from '../components/Wishlist/Wishlist'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

const Routes = () => {
    return (<>

        <Header />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/auth'>
                <Auth />
            </Route>
            <Route path='/product/:id'>
                <SingeProduct />
            </Route>
            <Route path='/wishlist'>
                <Wishlist />
            </Route>
            <Route path='/basket'>
                <Basket />
            </Route>
            <Route path='/search/:productName'>
                <Search />
            </Route>
            <Route path='/categories/:id'>
                <SingleCategory />
            </Route>
        </Switch>
    </>
    )
}

export default Routes