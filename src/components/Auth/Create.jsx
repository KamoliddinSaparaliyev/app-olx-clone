
import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from './Config'
import instance from '../../api/instance'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function Create() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvwlwzOSBslFOz2dk2sLygF7ws45e10HGg&usqp=CAU"

    })

    function createUser(e) {
        e.preventDefault()
        instance.post('/users/', formData)
            .then(res => {
                if (res.data.name) {
                    dispatch({ name: res.data.name, type: "CREATE_USER" })
                    history.push('/')

                }
            })
            .catch(err => console.log(err))

    }

    function cerateAccountWithGoogle() {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.error(err))
    }

    return (
        <div className='create-card'>
            <div>
                <button className='login-google'>
                    <FcGoogle className='google-icon' />
                    <p onClick={cerateAccountWithGoogle} className='google-title'>{t('google_in')}</p>
                </button>
                <div className='yoki'>
                    <hr className='yoki-line' />
                    <p>{t('yoki')}</p>
                    <hr className='yoki-line' />
                </div>
            </div>
            <form onSubmit={(e) => createUser(e)} className='login-form'>
                <label htmlFor="name">{t('input_name')}</label>
                <input required onChange={e => setFormData({
                    ...formData, name: e.target.value
                })} type="text" name="name" id="name" />
                <label htmlFor="email">{t('input_email')}</label>
                <input required onChange={e => setFormData({
                    ...formData, email: e.target.value
                })} type="email" name="email" id="email" />
                <label htmlFor="password">{t('input_password')}</label>
                <input required onChange={e => setFormData({
                    ...formData,
                    password: e.target.value
                })} type="password" name='password' id='password' />
                <p className='auth_title'><a href="https://help.olx.uz/hc/uz/articles/360009197178">{t('a_1')} </a>{t('sign_in')}</p>
                <button className='login__btn'>{t('signup')}</button>
            </form>
        </div>
    )
}
