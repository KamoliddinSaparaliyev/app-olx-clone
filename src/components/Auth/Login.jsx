import React from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {

    const { t } = useTranslation()
    return (
        <div className='singin-card'>
            <form className='login-form'>
                <label htmlFor="email">{t("input_email")}</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">{t("input_password")}</label>
                <input type="password" name='password' id='password' />
                <a className='auth-login' href="#parol">{t("removed_password")}</a>
                <button className='login__btn'>{t("signin")}</button>
            </form>
            <div>
                <div className='yoki'>
                    <hr className='yoki-line' />
                    <p>{t("yoki")}</p>
                    <hr className='yoki-line' />
                </div>
                <button className='login-google'>
                    <FcGoogle className='google-icon' />
                    <p className='google-title'>{t("google_in")}</p>
                </button>
            </div>
            <p className='auth_title'> {t('info_text')} <a href="https://help.olx.uz/hc/uz/articles/360009197178"> {t('a_1')} </a></p>
        </div>
    )
}
