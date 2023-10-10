import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import useFavourites from '../../../hooks/useFavourites'
import { Context } from '../../../index'
import style from './FavouritesButton.module.css'

const FavouritesButton = observer(({ user, productStore, productOne, inImage }) => {
    const { hideModal } = useContext(Context)

    const { appendFavourites, removeFavourites,  } = useFavourites(productStore)

    const beFavourites = productStore.favourites.find(e => e.productId === productOne.id)

    const onFavourites = async () => {
        try {
            if (beFavourites) {
                return await removeFavourites({
                    productId: productOne.id, userId: user.getUser.id
                })
            }
            await appendFavourites({
                productId: productOne.id, userId: user.getUser.id, name: productOne.name, image: productOne.image
            })
            return hideModal.setHideFavourites(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <button
            onClick={onFavourites}
            className={inImage ? `${style.button + ' ' + style.absolute}` : style.button}
        >
            <span className={style.span}>{beFavourites ? <>&#10084;</> : <>&#9825;</>}</span>
        </button>
    )
})

export default FavouritesButton