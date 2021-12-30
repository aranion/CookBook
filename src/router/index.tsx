import { Suspense } from 'react';
// import {useAuth} from 'hooks/useAuth';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { routeList, IRoute, RouteNames} from './routeList';
import { useAppSelector } from 'store';
import { getIsAuth } from 'store/profile/selectors';

export const AppRouter = () => {
    const isAuth = useAppSelector(getIsAuth);
    const location = useLocation();
    // const navigate = useNavigate();

    if (!isAuth) return <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {routeList.map((route: IRoute, idx: number) => {
                return route.private ?
                    <Route key={idx} path={route.path}
                           element={<Navigate to={RouteNames.LOGIN}
                                              state={{from: location}}/>}/>
                    :
                    <Route key={idx} path={route.path}
                           element={route.component}/>
            })}
        </Routes>
    </Suspense>

    return <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {routeList.map((route: IRoute, idx: number) => {
                return <Route key={idx} path={route.path}
                              element={route.component}/>
            })}
        </Routes>
    </Suspense>


}
