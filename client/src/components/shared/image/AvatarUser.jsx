import React, { useContext } from 'react'
import userIcon from '../../../utils/image/user.png'
import { Context } from '../../../index'
import { BASE_URL } from '../../../utils/const'
import { observer } from 'mobx-react-lite'

const AvatarUser = observer(() => {
    const { user } = useContext(Context)

    return (
        <img src={user.avatar ? BASE_URL + `${user.avatar}` : userIcon} alt='' />
    )
})

export default AvatarUser