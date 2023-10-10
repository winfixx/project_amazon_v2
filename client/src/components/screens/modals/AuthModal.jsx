import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SHOP_ROUTE, WELCOME_ROUTE } from '../../../utils/const'
import logo from '../../../utils/image/logoBlack.png'
import FormAuth from '../../shared/form/FormAuth'
import style from './AuthModal.module.css'
import Welcome from './Welcome'

const AuthModal = () => {
    const location = useLocation()
    const isWelcomePath = location.pathname === WELCOME_ROUTE
    const navigate = useNavigate()

    return (
        <div className={style.modal}>
            <div className={style.times}>
                <div>
                    <b onClick={() => navigate(SHOP_ROUTE)}>&#10006;</b>
                </div>
            </div>

            <div className={style.logo}>
                <img
                    src={logo}
                    alt='logo'
                />
            </div>
            <div className={style.main}>
                {isWelcomePath ? <Welcome /> : <FormAuth />}
            </div>
        </div>
    )

}

export default AuthModal