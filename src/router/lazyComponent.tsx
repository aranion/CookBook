import {lazy, LazyExoticComponent} from "react";

export const LazyComponent = (pathToComponent: string) => {
    const Component: LazyExoticComponent<() => JSX.Element> = lazy(async () => await import(pathToComponent))
    return <Component/>;
};
