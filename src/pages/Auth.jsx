import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Create from '../components/Auth/Create'
import Login from '../components/Auth/Login'
import './Auth.scss'
import { useTranslation } from 'react-i18next'
export default function Auth() {
  const { t } = useTranslation()
  return (
    <div className='auth-container'>
      <div className='animation-box'>
        <div className='animation-circle'></div>
      </div>
      <div className='auth__card'>
        <div className='auth__card-header'>
          <NavLink activeClassName='auth__header-activelink' className='auth__header-link' exact to='/auth/login'>{t('signin')}</NavLink>
          <NavLink activeClassName='auth__header-activelink' className='auth__header-link' exact to='/auth'>{t('signup')}</NavLink>
        </div>
        <Switch>
          <Route exact path='/auth/login'>
            <Login />
          </Route>
          <Route path='/auth'>
            <Create />
          </Route>
        </Switch>
      </div>
    </div>)
}
