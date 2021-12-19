import { RootState, useAppSelector } from 'store'
import Content from './Content'

const AdvancedSearch = () => {

  const {data} = useAppSelector((state:RootState) => state.recipes);

  return (
    <Content recipes={data}/>
  );
};

export default AdvancedSearch;