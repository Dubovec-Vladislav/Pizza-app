import React, { FC, useContext, useEffect } from 'react'
import style from './Main.module.scss'
import FilterMenu from './FilterMenu/FilterMenu'
import PizzaField from './PizzaField/PizzaField'
import { SearchContext } from '../../App'
import { useAppSelector } from '../../assets/ts/hooks'
import { selectActiveCategoryID } from '../../assets/redux/slices/categorySlice'
import { selectActiveSortType, selectSortTypesProperty } from '../../assets/redux/slices/sortSlice'
import { setPizzas, setIsLoading } from '../../assets/redux/slices/pizzasSlice'
import { useDispatch } from 'react-redux'

const Main: FC = () => {

  // ------------ Category Of Pizza ------------ //
  const categoryId = useAppSelector(selectActiveCategoryID);


  // ------------ Sort Menu ------------ //
  const sortTypesProperty = useAppSelector(selectSortTypesProperty);
  const activeSortType = useAppSelector(selectActiveSortType);


  // --------------- Pizza Field --------------- //
  const dispatch = useDispatch();


  // -------------- Data Request --------------- //
  const END_POINT_URL = 'https://64ca3494b2980cec85c315c6.mockapi.io/items';
  const { searchValue } = useContext(SearchContext)!;

  useEffect(() => {
    dispatch(setIsLoading(true));

    const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType) || undefined;

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = foundSortType?.sortProperty && `&sortBy=${foundSortType.sortProperty}`;
    const order = foundSortType?.order && `&order=${foundSortType.order}`;
    // const search = searchValue && `&search=${searchValue}`;

    fetch(`${END_POINT_URL}?${category}${sortBy}${order}`)
      // fetch(`${END_POINT_URL}?${category}${sortBy}${order}${search}`)
      .then((res) => res.json())
      .then((arr) => {
        dispatch(setPizzas(arr));
        dispatch(setIsLoading(false));
      })

    window.scrollTo(0, 0);
  }, [sortTypesProperty, activeSortType, categoryId, searchValue, dispatch]);

  return (
    <main className={style.block}>
      <div className={style.body}>
        <FilterMenu />
        <PizzaField />
      </div>
    </main>
  );
};

export default Main;