import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../../utils/const'
import style from './ProductItem.module.css'
import ProductImage from '../shared/image/ProductImage'
import Review from '../shared/review/Review'


const ProductItem = observer(({ productOne, user, productStore }) => {
    const navigate = useNavigate()

    return (
        <div className={style.container}>
            <ProductImage
                image={productOne.image}
                navigate={navigate}
                route={SHOP_ROUTE}
                productOne={productOne}
                user={user}
                productStore={productStore}
            />

            <div className={style.info}>
                <h4>{productOne.name}</h4>
                <section>
                    <Review review={productOne.rating} />
                    <span className={style.price} >{productOne.price} руб.</span>
                </section>
            </div>
        </div>
    )
})

export default ProductItem