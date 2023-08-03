import React, { FC, useEffect, useMemo, useState } from 'react'
import style from './Main.module.scss'
import CategoryOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'

const Main: FC = (props) => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategoryItem, setActiveCategoryItem] = useState(categoryItems[0]);


  // ------------ Sort Menu ------------ //
  const sortItems = ['популярности', 'цене', 'алфавиту'];
  const [activeSort, toggleActiveSort] = useState(false);
  const [activeSortItem, setActiveSortItem] = useState(sortItems[0]);


  // --------------- Pizza Field --------------- //
  interface Pizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
  }
  let [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // -------------- Data Request --------------- //
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://64ca3494b2980cec85c315c6.mockapi.io/items?category=${categoryItems.indexOf(activeCategoryItem)}`)
      // fetch('https://64ca3494b2980cec85c315c6.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [activeCategoryItem]);


  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza
          categoryItems={categoryItems}
          activeCategoryItem={activeCategoryItem}
          setActiveCategoryItem={setActiveCategoryItem}

          sortItems={sortItems}
          activeSort={activeSort}
          toggleActiveSort={toggleActiveSort}
          activeSortItem={activeSortItem}
          setActiveSortItem={setActiveSortItem}
        />
        <PizzaField items={items} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Main;