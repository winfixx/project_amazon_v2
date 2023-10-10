import { observer } from 'mobx-react-lite'
import style from './CategoryItem.module.css'

const CategoryItem = observer(({ category, product }) => {
    const categoryActive = category.id === product.selectedCategory.id
    const selectCategory = () => categoryActive ?
        product.setSelectedCategory({}) :
        product.setSelectedCategory(category)

    return (
        <li
            onClick={() => selectCategory()}
            className={categoryActive ? `${style.li} ${style.active}` : style.li}
        >
            {category.name} <span>&#62;</span>
        </li>
    )
})

export default CategoryItem