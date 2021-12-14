// import {Suspense} from 'react'
import {PrivateRouter} from './privateRouter'
import {PublicRouter} from './publicRouter'

const isAuth = true;  // поправим после реализации авторизации

export const AppRouter = () => {
    return isAuth ? (<PrivateRouter/>) : <PublicRouter/>
}
