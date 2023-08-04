import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import style from './Main.module.scss'
import CategoryOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'
import { SearchContext } from '../../App'
import { useAppSelector } from '../../assets/ts/hooks'

const Main: FC = () => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = useMemo(() => ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'], []);
  const activeCategoryItem = useAppSelector((state) => state.filter.activeCategoryItem);

  // ------------ Sort Menu ------------ //
  const sortTypes = useMemo(() => [
    'возрастанию популярности', 'убыванию популярности',
    'дешевые', 'дорогие', 'алфавиту'
  ], []);
  const sortTypesProperty = useMemo(() => [
    { name: 'возрастанию популярности', sortProperty: 'rating', order: 'asc' },
    { name: 'убыванию популярности', sortProperty: 'rating', order: 'desc' },
    { name: 'дешевые', sortProperty: 'price', order: 'asc' },
    { name: 'дорогие', sortProperty: 'price', order: 'desc' },
    { name: 'алфавиту', sortProperty: 'title', order: 'desc' }
  ], []);
  const [activeSortType, setActiveSortType] = useState(sortTypes[0]);


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

    const categoryId = categoryItems.indexOf(activeCategoryItem);
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
  }, [categoryItems, activeCategoryItem, sortTypesProperty, activeSortType, searchValue]);

  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza
          categoryItems={categoryItems}

          sortTypes={sortTypes}
          activeSortType={activeSortType}
          setActiveSortType={setActiveSortType}
        />
        <PizzaField items={items} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Main;