import AuthModal from './components/screens/modals/AuthModal'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'
import ProductPage from './pages/ProductPage'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, WELCOME_ROUTE } from './utils/const'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: '/checkout',
        Component: Checkout
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthModal
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthModal
    },
    {
        path: WELCOME_ROUTE,
        Component: AuthModal
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: SHOP_ROUTE + '/:id',
        Component: ProductPage
    }
]