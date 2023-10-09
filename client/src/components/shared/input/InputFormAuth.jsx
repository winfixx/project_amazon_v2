import React from 'react'
import style from './InputFormAuth.module.css'

const InputFormAuth = ({
    register,
    required,
    label,
    title,
    minLength,
    maxLength,
    pattern,
    message
}) => {
    return (
        <div className={style.container}>
            <label htmlFor={label} >
                {title}
            </label>
            <input
                {...register(label, { required, minLength, maxLength, pattern, message })}
                className={style.input}
                id={label}
                type='text'
            />
        </div>
    )
}

export default InputFormAuth