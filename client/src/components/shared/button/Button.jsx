import { useNavigate } from 'react-router-dom'
import style from './Button.module.css'

const Button = ({ title, path, reset, id }) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => {return (reset && reset(), navigate(path))}}
            className={style.button}
            id={id && style.button}
        >
            <b>{title}</b>
        </button>
    )
}

export default Button
