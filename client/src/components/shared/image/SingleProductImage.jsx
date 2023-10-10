import { BASE_URL } from '../../../utils/const'
import MiniProductImage from './MiniProductImage'
import style from './SingleProductImage.module.css'

const SingleProductImage = ({ image, setImage, data }) => {
    return (
        <div className={style.images}>
            <img
                className={style.image}
                src={BASE_URL + `${image.currentImage}`}
                alt={data.name}
            />
            <div className={style.scroll__image}>
                {image.allImage.map(item =>
                    <MiniProductImage key={item.id} setImage={setImage} item={item} image={image}/>
                )}
            </div>
        </div>
    )
}

export default SingleProductImage