import { BASE_URL } from '../../../utils/const'
import FavouritesButton from '../button/FavouritesButton'
import style from './ProductImage.module.css'

const ProductImage = ({ image, navigate, route, productOne, productStore, user }) => {
    return (
        <div  className={style.container}>
            <div onClick={() => navigate(route + `/${productOne.id}`)}>
                <img className={style.image} src={BASE_URL + `${image}`} alt="" />
            </div>
            <FavouritesButton
                user={user}
                productOne={productOne}
                productStore={productStore}
                inImage={true}
            />
        </div>
    )
}

export default ProductImage