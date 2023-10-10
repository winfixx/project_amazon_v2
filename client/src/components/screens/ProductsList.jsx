import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import ProductItem from './ProductItem'
import style from './ProductsList.module.css'

const ProductsList = observer(() => {
    const { product, user } = useContext(Context)

    return (
        <div className={style.container}>
            {product.products.map(item =>
                <ProductItem key={item.id} productOne={item} user={user} productStore={product}/>
            )}
        </div>
    )
})

export default ProductsList