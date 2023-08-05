import React, { FC, useContext, useEffect, useState } from 'react'
import style from './Main.module.scss'
import CategoryOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'
import { SearchContext } from '../../App'
import { useAppSelector } from '../../assets/ts/hooks'
import { selectActiveCategoryItemID } from '../../assets/redux/slices/filterSlice'
import { selectActiveSortType, selectSortTypesProperty } from '../../assets/redux/slices/sortSlice'

const Main: FC = () => {

  // ------------ Category Of Pizza ------------ //
  const categoryId = useAppSelector(selectActiveCategoryItemID);


  // ------------ Sort Menu ------------ //
  const sortTypesProperty = useAppSelector(selectSortTypesProperty);
  const activeSortType = useAppSelector(selectActiveSortType);


  // --------------- Pizza Field --------------- //
  interface Pizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
  };
  const [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  // -------------- Data Request --------------- //
  const END_POINT_URL = 'https://64ca3494b2980cec85c315c6.mockapi.io/items';
  const { searchValue } = useContext(SearchContext)!;

  useEffect(() => {
    setIsLoading(true);

    const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType) || undefined;

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = foundSortType?.sortProperty && `&sortBy=${foundSortType.sortProperty}`;
    const order = foundSortType?.order && `&order=${foundSortType.order}`;
    // const search = searchValue && `&search=${searchValue}`;

    fetch(`${END_POINT_URL}?${category}${sortBy}${order}`)
      // fetch(`${END_POINT_URL}?${category}${sortBy}${order}${search}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [categoryId, sortTypesProperty, activeSortType, searchValue]);

  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza />
        <PizzaField items={items} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Main;