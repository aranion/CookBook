import {Routes, Route} from "react-router";
import {routes, IRoute} from './routeList'
// import {LazyComponent} from './lazyComponent'

export const PrivateRouter = () => {
    return (
        <Routes>
            {routes.map((route: IRoute, idx: number) => {
                return <Route key={idx} path={route.path} element={route.component}/>
            })}
        </Routes>
    );
};
