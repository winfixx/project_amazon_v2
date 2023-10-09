import { useContext } from 'react'
import { Context } from '../../../../index'
import CategoryItem from './CategoryItem'
import { observer } from 'mobx-react-lite'
import style from './CategoriesList.module.css'

const CategoriesList = observer(() => {
    const { product } = useContext(Context)

    const styleCategories = !product.selectedCategory.id ? `${style.li} ${style.active}` : style.li

    return (
        <ul className={style.ul}>
            {product.categories.map(category =>
                <CategoryItem
                    key={category.id}
                    category={category}
                    product={product}
                />
            )}
            <li
                className={styleCategories}
                onClick={() => product.setSelectedCategory({})}
            >
                View all <span>&#62;</span>
            </li>
        </ul>
    )
})

export default CategoriesList