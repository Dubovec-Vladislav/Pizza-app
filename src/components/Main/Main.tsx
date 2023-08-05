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
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setIsLoading(true));

    const category = categoryId > 0 ? `category=${categoryId}` : '';

    const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType) || undefined;
    const sortBy = foundSortType?.sortProperty && `&sortBy=${foundSortType.sortProperty}`;
    const order = foundSortType?.order && `&order=${foundSortType.order}`;
    // const search = searchValue && `&search=${searchValue}`;

    axios.get(`${END_POINT_URL}?${category}${sortBy}${order}`)
      // axios.get(`${END_POINT_URL}?${category}${sortBy}${order}${search}`)
      .then((res) => {
        dispatch(setPizzas(res.data));
        dispatch(setIsLoading(false));
      });

    window.scrollTo(0, 0);
  }, [sortTypesProperty, activeSortType, categoryId, searchValue, dispatch]);


  // ---------------- URL Path ----------------- //
  useEffect(() => {
    const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType) || undefined;
    const sortBy = foundSortType?.sortProperty;
    const order = foundSortType?.order;
    const search = searchValue;

    const queryString = qs.stringify({
      categoryId,
      sortBy,
      order,
      search,
    }); // => categoryId=0&sortBy=rating&order=asc&search=Пепперони

    navigate(`?${queryString}`)
  }, [sortTypesProperty, activeSortType, categoryId, searchValue, navigate]);


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