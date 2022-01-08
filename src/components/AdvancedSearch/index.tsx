import {RootState, useAppSelector} from 'store';
import Content from './Content';
import {useEffect} from "react";
import { useActions } from "hooks/useActions";

export const AdvancedSearch = () => {

    const { fetchSearchRecipes } = useActions();

    useEffect(() => {
        fetchSearchRecipes();
    }, []);

    const {data} = useAppSelector((state: RootState) => state.recipes);

    return (
        <Content recipes={data}/>
    );
};