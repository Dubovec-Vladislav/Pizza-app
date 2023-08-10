import React, { FC, useContext, useEffect, useRef } from 'react'
import style from './Main.module.scss'
import FilterMenu from './FilterMenu/FilterMenu'
import PizzaField from './PizzaField/PizzaField'
import { SearchContext } from '../../App'
import { useAppSelector } from '../../assets/ts/hooks'
import { selectActiveCategoryID, selectCategoryItems, setActiveCategory } from '../../assets/redux/slices/categorySlice'
import { selectActiveSortType, selectSortTypesProperty, setActiveSortType } from '../../assets/redux/slices/sortSlice'
import { setPizzas, setIsLoading } from '../../assets/redux/slices/pizzasSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

const Main: FC = () => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = useAppSelector(selectCategoryItems);
  const categoryId = useAppSelector(selectActiveCategoryID);

  // ------------ Sort Menu ------------ //
  const sortTypesProperty = useAppSelector(selectSortTypesProperty);
  const activeSortType = useAppSelector(selectActiveSortType);

  // --------------- General --------------- //
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { searchValue } = useContext(SearchContext)!;
  const isSearch = useRef(false);
  const isSMounted = useRef(false);

  // --------------- Params --------------- //
  const category = categoryId > 0 ? categoryId : '';
  const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType);
  const sortBy = foundSortType?.sortProperty;
  const order = foundSortType?.order;
  const search = searchValue;


  // --------------- Setting URL --------------- //
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      
      // Category
      dispatch(setActiveCategory(categoryItems[Number(params.categoryId)]));
      // Filters
      const sortType = sortTypesProperty.find(sortType => sortType.sortProperty === params.sortBy && sortType.order === params.order);
      dispatch(setActiveSortType(sortType!.name));
      
      isSearch.current = true;
    }
  }, [categoryItems, sortTypesProperty, dispatch]);


  // -------------- Data Request --------------- //
  const END_POINT_URL = 'https://64ca3494b2980cec85c315c6.mockapi.io/items';

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        dispatch(setIsLoading(true));
        const response = await axios.get(`${END_POINT_URL}?category=${category}&sortBy=${sortBy}&order=${order}`);
        // const response = await axios.get(`${END_POINT_URL}?category=${category}&sortBy=${sortBy}&order=${order}&search=${search}`);
        dispatch(setPizzas(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setIsLoading(false));
      };

      window.scrollTo(0, 0);
    };

    if (!isSearch.current) fetchPizzas(); // Если обновление данных в Redux из URL не идет, то делаем запрос пицц
    isSearch.current = false;
  }, [category, sortBy, order, dispatch]);


  // ---------------- URL Path ----------------- //
  useEffect(() => {
    if (isSMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortBy,
        order,
        search,
      }); // => categoryId=0&sortBy=rating&order=asc&search=Пепперони

      // Если все фильтры стоят в стандартном положение, то чистим  URL
      if (categoryId === 0 && sortBy === sortTypesProperty[0].sortProperty && order === sortTypesProperty[0].order) navigate('')
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