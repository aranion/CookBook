import {Recipe, LastRecipes} from "components";
import styles from './pages.module.scss'

const Home = () => {
    // const {fetchAllRecipes} = useActions()
    //
    // useEffect(()=> {
    //     fetchAllRecipes()
    // }, [])
    //
    // let recipes = useAppSelector((state) =>
    //         state.recipes.data.filter((item: IRecipe) =>
    //             item.title.indexOf(state.recipes.filter) !== -1
    //         ))
    // console.log("Home", recipes)
    // const {profile} = useAppSelector((state: RootState) => state)

    // function getRandomInt(min: number, max: number) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min)) + min;
    // }
    // function lastElement() {
    //   let newArr:IRecipe[] = [];
    //
    //   for (let i = data['length'] - 1; i > data['length'] - 4; i--) {
    //     newArr.push(data[i]);
    //   }
    //   return newArr;
    // }

    // const randomRecipe = data[getRandomInt(0, data['length'])];
    // const lastRecipe = lastElement();
    return (
        <div className={styles.pages__center}>
            <Recipe />
            <LastRecipes/>
        </div>
    );
};

export default Home;