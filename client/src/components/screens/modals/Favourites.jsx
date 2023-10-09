import { observer } from 'mobx-react-lite'
import style from './Favourites.module.css'
import MiniProductImage from '../../shared/image/MiniProductImage'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../../../utils/const'
import FavouritesButton from '../../shared/button/FavouritesButton'
import useFavourites from '../../../hooks/useFavourites'

const Favourites = observer(({ productStore, user, hideModal }) => {
    const { removeFavourites } = useFavourites(productStore)

    if (!hideModal.hideFavourites) {
        return (
            <div className={style.container}>

                {productStore.favourites.map(item =>
                    <div key={item.id} className={style.content}>
                        <div className={style.image}>
                            <MiniProductImage item={item} />
                        </div>
                        <div className={style.info}>
                            <h4 className={style.name}>{item.name}</h4>
                            <p className={style.p}>
                                <NavLink
                                    onClick={() => hideModal.setHideFavourites(false)}
                                    to={SHOP_ROUTE + `/${item.productId}`}
                                    className={style.link}
                                >
                                    more see
                                </NavLink>
                                <span className={style.remove} onClick={() => removeFavourites({ productId: item.productId, userId: user.getUser.id })}>
                                    &#128465;
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
})

export default Favourites