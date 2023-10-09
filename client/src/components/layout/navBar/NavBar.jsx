import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../utils/image/logoBlack.png'
import useSearch from '../../../hooks/useSearch'
import { Context } from '../../../index'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../../../utils/const'
import InputSearch from '../../shared/input/InputSearch'
import style from './NavBar.module.css'
import AvatarUser from '../../shared/image/AvatarUser'
import Favourites from '../../screens/modals/Favourites'
import useGetFavourites from '../../../hooks/useGetFavourites'

const NavBar = observer(() => {
    const { user, product, hideModal } = useContext(Context)

    const { searchProduct, register, handleSubmit } = useSearch()

    useGetFavourites(product, user.getUser.id)

    const navigate = useNavigate()

    const hideFavourites = () => !hideModal.hideFavourites ?
        hideModal.setHideFavourites(true) :
        hideModal.setHideFavourites(false)

    return (
        <header className={style.header}>
            <div>
                <div className={style.div__logo}>
                    <NavLink to={SHOP_ROUTE}>
                        <img
                            className={style.logo}
                            src={logo}
                            alt='logo'
                        />
                    </NavLink>
                </div>

                <InputSearch
                    register={register}
                    handleSubmit={handleSubmit}
                    searchProduct={searchProduct}
                    type='text'
                    select='categoryId'
                    title='name'
                    placeholder='Искать здесь...'
                    product={product}
                />

                <div className={style.div__list}>
                    <NavLink className={style.fav__content}>
                        <span onClick={() => hideFavourites()} id={style.fav} className={style.icons}>&#9825;</span>
                        {product.favourites.length ? <span className={style.fav__count}>{product.favourites.length}</span> : <></>}
                        <Favourites productStore={product} user={user} hideModal={hideModal} />
                    </NavLink>
                    <NavLink>
                        <span className={style.icons} id={style.cart}>&#128722;</span>
                    </NavLink>
                    <div onClick={() => !user.isAuth && navigate(LOGIN_ROUTE)}>
                        <NavLink className={style.sign_in}>
                            <h4>{user.isAuth ? user.getUser.fullName : 'Sign In'}</h4>
                            <AvatarUser />
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
})

export default NavBar