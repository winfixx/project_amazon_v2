import { BASE_URL } from '../../../utils/const'
import style from './MiniProductImage.module.css'

const MiniProductImage = ({setImage, item, image}) => {
    return (
        <img
            onClick={() => setImage && setImage({ ...image, currentImage: item.image })}
            className={style.preview}
            src={BASE_URL + item.image}
            alt={item.image}
        />
    )
}

export default MiniProductImage