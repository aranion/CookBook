import { RootState, useAppSelector } from 'store';
import Content from './Content';

export const AdvancedSearch = () => {

  const {data} = useAppSelector((state:RootState) => state.recipes);

  return (
    <Content recipes={data}/>
  );
};