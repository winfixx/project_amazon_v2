import React, { createContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import UserStore from './store/UserStore'
import ProductStore from './store/ProductStore'
import ModalHideStore from './store/ModalHideStore'

export const Context = createContext()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore(),
        hideModal: new ModalHideStore()
      }}>
        <App />
      </Context.Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
