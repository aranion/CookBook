import {RootState, useAppSelector} from 'store';
import Content from './Content';
import {useEffect} from "react";
import {$api} from "../../api/api";

export const AdvancedSearch = () => {

    useEffect(() => {
        (async () => {
            await $api.post('recipes/search/advanced', {
                time: {
                    $qte: 5,
                    $lte: 20,
                },
                kindOfFood: {
                    $in: ["Закуски", "Десерты"
                    ]
                }
            })
        })()
    }, [])
    const {data} = useAppSelector((state: RootState) => state.recipes);

    return (
        <Content recipes={data}/>
    );
};