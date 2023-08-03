import React, { FC, useEffect, useMemo, useState } from 'react'
import style from './Main.module.scss'
import CategoryOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'

const Main: FC = (props) => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = useMemo(() => ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'], []);
  const [activeCategoryItem, setActiveCategoryItem] = useState(categoryItems[0]);


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
  useEffect(() => {
    setIsLoading(true);

    const categoryId = categoryItems.indexOf(activeCategoryItem);
    const foundSortType = sortTypesProperty.find(sortType => sortType.name === activeSortType) || undefined;

    fetch(`https://64ca3494b2980cec85c315c6.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${foundSortType?.sortProperty}&order=${foundSortType?.order}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [categoryItems, activeCategoryItem, sortTypesProperty, activeSortType]);

  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza
          categoryItems={categoryItems}
          activeCategoryItem={activeCategoryItem}
          setActiveCategoryItem={setActiveCategoryItem}

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