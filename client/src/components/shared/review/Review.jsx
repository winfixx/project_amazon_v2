import style from './Review.module.css'

const Review = ({ review, count, hide }) => {
    const reviewScore = Math.round(review)
    const reviews = []
    const remains = []

    for (let i = 0; i < reviewScore; i++) {
        reviews.push(i)
    }
    for (let i = 0; i < 5 - reviewScore; i++) {
        remains.push(i)
    }

    return <div>
        <div>
            {reviews.map((e, i) =>
                <span key={i} className={style.star}>&#9733;</span>
            )}
            {remains.map((e, i) =>
                <span key={i} className={style.star}>&#9734;</span>
            )}
            {review}
        </div>
        {hide &&
            <span className={style.count}>
                {count} Reviews
            </span>
        }
    </div>

}

export default Review