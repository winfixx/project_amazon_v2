import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../../index'
import { SHOP_ROUTE } from '../../../utils/const'
import Button from '../../shared/button/Button'
import style from './Welcome.module.css'

const Welcome = observer(() => {
    const { user } = useContext(Context)

    return (
        <>
            <div className={style.div}>
                <section className={style.section}>
                    <h2>Hello, {user?.getUser?.fullName}!</h2>
                    <p>Welcome to Amazon</p>
                </section>
                <Button path={SHOP_ROUTE} title={'Close'} />
            </div>
        </>
    )
})

export default Welcome