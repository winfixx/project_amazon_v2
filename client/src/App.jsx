import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/routing/AppRouter'
import useCheckAuth from './hooks/useCheckAuth'
import { Context } from './index'
import { ACCESS_TOKEN } from './utils/const'
import Aside from './components/layout/aside/Aside'
import NavBar from './components/layout/navBar/NavBar'

const App = observer(() => {
  const { user, product } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      useCheckAuth(user)
    }
  }, [])

  return (
    <Router>
      <NavBar />

      <div
        style={{ display: 'flex', height: '100%' }}
      >
        <Aside product={product} />
        <AppRouter user={user} />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </Router >
  )
})

export default App
