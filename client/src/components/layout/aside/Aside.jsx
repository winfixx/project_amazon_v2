import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import style from './Aside.module.css'
import { SHOP_ROUTE } from '../../../utils/const'
import CategoriesList from './list/CategoriesList'
import useLogout from '../../../hooks/useLogout'
import logoutIcon from '../../../utils/image/logout.png'

const Aside = observer(() => {
    const location = useLocation()
    const path = location.pathname === '/' || location.pathname === `${SHOP_ROUTE}` || location.pathname === '*'
    const navigate = useNavigate()

    const { mutateAsync } = useLogout(SHOP_ROUTE)

    return (
        <aside className={style.aside}>
            {
                path ? <></> :
                    <div className={style.back}>
                        <span onClick={() => navigate(SHOP_ROUTE)} >&lt; Back to shop</span>
                    </div>
            }

            <div className={style.container}>
                <CategoriesList />
            </div>

            <div className={style.logout} onClick={async () => await mutateAsync()}>
                <img src={logoutIcon} alt="logoutIcon" />
                <b>Выйти</b>
            </div>
        </aside>
    )
})

export default Aside