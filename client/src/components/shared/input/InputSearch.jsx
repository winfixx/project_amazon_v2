import React from 'react'
import style from './InputSearch.module.css'
import magnifier from '../../../utils/image/magnifier.png'
import { observer } from 'mobx-react-lite'

const InputSearch = observer(({ register, handleSubmit, searchProduct, type, title, select, placeholder, product }) => {
    return (
        <div className={style.div}>
            <form onSubmit={handleSubmit(searchProduct)} className={style.form}>
                <input
                    {...register(title)}
                    type={type}
                    placeholder={placeholder}
                    className={style.input}
                />
                <select {...register(select)} className={style.select}>
                    <option className={style.option} value=''>
                        All categories
                    </option>

                    {product.categories.map(category =>
                        <option
                            className={style.option}
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    )}
                </select>
                <button className={style.button}>
                    <img src={magnifier} alt="Поиск" />
                </button>
            </form>
        </div>
    )
})

export default InputSearch