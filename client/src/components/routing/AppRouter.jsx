import { observer } from 'mobx-react-lite'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../../pages/Shop'
import { authRoutes, publicRoutes } from '../../routes'

const AppRouter = observer(({ user }) => {
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                    exact
                />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                    exact
                />
            )}
            <Route path='*' element={<Shop />} />
        </Routes>
    )
})

export default AppRouter