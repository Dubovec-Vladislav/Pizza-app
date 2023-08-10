import React, { FC, useEffect, useRef } from 'react'
import style from './Main.module.scss'
import FilterMenu from './FilterMenu/FilterMenu'
import PizzaField from './PizzaField/PizzaField'
import { useAppSelector } from '../../assets/ts/hooks'
import { selectActiveCategory, selectCategoryItems, setActiveCategory } from '../../assets/redux/slices/categorySlice'
import { selectActiveSortType, selectSortTypesProperty, setActiveSortType } from '../../assets/redux/slices/sortSlice'
import { fetchPizzas } from '../../assets/redux/slices/pizzasSlice'
import { useDispatch } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { selectSearchValue, setSearchValue } from '../../assets/redux/slices/searchSlice'

const Main: FC = () => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = useAppSelector(selectCategoryItems);
  const activeCategory = useAppSelector(selectActiveCategory);
  const categoryId = categoryItems.indexOf(activeCategory);

  // ------------ Sort Menu ------------ //
  const sortTypesProperty = useAppSelector(selectSortTypesProperty);
  const activeSortType = useAppSelector(selectActiveSortType);

  // --------------- General --------------- //
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate()
  const isSearch = useRef(false);
  const isSMounted = useRef(false);

  // --------------- Params --------------- //
  const category = categoryId > 0 ? categoryId : '';
  const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType);
  const sortBy = foundSortType?.sortProperty;
  const order = foundSortType?.order;
  const search = useAppSelector(selectSearchValue);


  // --------------- Setting URL --------------- //
  useEffect(() => {
    if (window.location.search) {
      // Get params
      const params = qs.parse(window.location.search.substring(1));
      // Category
      dispatch(setActiveCategory(categoryItems[Number(params.categoryId)]));
      // Filters (sort + order)
      const sortType = sortTypesProperty.find(sortType => sortType.sortProperty === params.sortBy && sortType.order === params.order);
      dispatch(setActiveSortType(sortType!.name));
      // Search
      dispatch(setSearchValue(String(params.search)));
      // Отмечаем что идет обновление Redux из URL
      isSearch.current = true; 
    }
  }, [categoryItems, sortTypesProperty, dispatch]);


  // -------------- Data Request --------------- //
  useEffect(() => {
    const getPizzas = () => {
      dispatch(fetchPizzas({ category, sortBy, order }));
      window.scrollTo(0, 0);
    };

    if (!isSearch.current) getPizzas(); // Не делаем запрос пицц при первом рендере, так как идет обновление данных
    isSearch.current = false; // Отметили что обновление Redux из URL закончилось
  }, [category, sortBy, order, search, dispatch]);


  // ---------------- URL Path ----------------- //
  useEffect(() => {
    if (isSMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortBy,
        order,
        search,
      }); // => categoryId=0&sortBy=rating&order=asc&search=Пепперони

      if (categoryId === 0 && sortBy === sortTypesProperty[0].sortProperty && order === sortTypesProperty[0].order && search === '') {
        navigate(''); // Если все параметры стоят в стандартном положение, то чистим  URL
      }
      else navigate(`?${queryString}`)
    }
    isSMounted.current = true;
  }, [categoryId, sortBy, order, search, sortTypesProperty, navigate]);


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