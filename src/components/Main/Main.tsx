import React, { FC, useEffect, useState } from 'react'
import style from './Main.module.scss'
import CategoryOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'

const Main: FC = (props) => {

  // ------------ Category Of Pizza ------------ //
  const categoryItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeItem, setActiveItem] = useState(categoryItems[0]);

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
    fetch(`https://64ca3494b2980cec85c315c6.mockapi.io/items?category=${categoryItems.indexOf(activeItem)}`)
      // fetch('https://64ca3494b2980cec85c315c6.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [activeItem]);


  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza categoryItems={categoryItems} activeItem={activeItem} setActiveItem={setActiveItem} />
        <PizzaField items={items} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Main;