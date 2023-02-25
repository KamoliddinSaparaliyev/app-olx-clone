import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../hooks/container/Container'
import logo from '../../assets/images/logo.svg'
import './Header.scss'
import { FiMessageCircle, FiHeart, FiUser } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import i18n from '../../language/i18next'
import { useSelector } from 'react-redux'

const Header = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const cretedUserData = useSelector(state => state)

  if (location.pathname.includes('/auth')) {
    return <></>
  } else {
    return (
      <header className='header' >
        <Container >
          <div className='header-wrapper'>
            <Link className='logo' to='/'>
              <img src={logo} height={40} alt="olx logo" />
            </Link>
            <nav className='nav-inner'>
              <ul className='nav-list'>
                <li className='language-link'>
                  <p onClick={() => i18n.changeLanguage('uz')} className='lang-link lang-link-uz'>UZ</p>
                  <p onClick={() => i18n.changeLanguage('ru')} className='lang-link'>RU</p>
                </li>
                <li>
                  <Link to='/message' className='nav-item-link'>
                    <FiMessageCircle className='nav-icon' />
                    <p>
                      {t("header_message")}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to='/wishlist' className='nav-item-link'>
                    <FiHeart className='nav-icon' />
                  </Link>
                </li>
                <li>
                  <Link to='/basket' className='nav-item-link backet-link'>
                    <FiShoppingCart className='nav-icon' />
                    <div className='basket-number'>2</div>
                  </Link>
                </li>
                <li>
                  <Link to='/auth' className='nav-item-link'>
                    <AiOutlineUser className='nav-icon' />
                    {cretedUserData.login.name ? cretedUserData.login.name : <p>{t('header_user')}</p>}
                  </Link>
                </li>
                <li>
                  <button className='nav-btn'>
                    {t('header_info')}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header >)
  }
}


export default Header