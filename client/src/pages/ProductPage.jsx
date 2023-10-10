import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Button from '../components/shared/button/Button'
import SingleProductImage from '../components/shared/image/SingleProductImage'
import Loading from '../components/shared/loading/Loading'
import Review from '../components/shared/review/Review'
import useGetOneProduct from '../hooks/useGetOneProduct'
import usePrice from '../hooks/usePrice'
import style from './ProductPage.module.css'
import { Context } from '../index'
import FavouritesButton from '../components/shared/button/FavouritesButton'

const ProductPage = observer(() => {
    const { user, product } = useContext(Context)

    const { id } = useParams()
    const { data, isLoading, isError, image, setImage } = useGetOneProduct(id)

    const { price } = usePrice(data)

    return <>
        {isLoading ?
            <Loading />
            :
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.head}>
                        <h1 className={style.name}>{data.name}</h1>
                        <Review review={data.rating} count={data.review.count} hide={true} />
                    </div>

                    <div className={style.body}>
                        <SingleProductImage image={image} setImage={setImage} data={data} />

                        <div className={style.description}>
                            {data.info.map(i =>
                                <section className={style.infos} key={i.id}>
                                    <h4>{i.title}</h4>
                                    <p>{i.description}</p>
                                </section>
                            )}
                        </div>

                        <div>
                            <div className={style.buttons}>
                                <h3 className={style.price}>
                                    <b>&#8381; {price.integer}.</b>{price.remains}
                                </h3>
                                <Button id={'button'} title={'Add to cart'} />
                                <div>
                                    <Button title={'Buy now'} />
                                    <FavouritesButton user={user} productStore={product} productOne={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
})

export default ProductPage