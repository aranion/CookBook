import {Suspense} from 'react'
import {useAuth} from 'hooks/useAuth';
import {Routes, Route, Navigate, useNavigate, useLocation} from 'react-router';
import {routeList, IRoute} from './routeList'
import Login from 'pages/Login';

export const AppRouter = () => {
    // const {isAuth} = useAuth();
    const isAuth = true

    const location = useLocation();
    const navigate = useNavigate();

    if (isAuth) return <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {routeList.map((route: IRoute, idx: number) => {
                return <Route key={idx} path={route.path}
                              element={route.component}/>
            })}
        </Routes>
    </Suspense>

    return <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {routeList.map((route: IRoute, idx: number) => {
                return route.private ?
                    <Route key={idx} path={route.path}
                           element={<Navigate to="/login"
                                              state={{from: location}}/>}/>
                    :
                    <Route key={idx} path={route.path}
                           element={route.component}/>
            })}
        </Routes>
    </Suspense>


}
