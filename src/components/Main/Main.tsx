import React, { FC, useState } from 'react'
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

  return (
    <main className={style.block}>
      <div className={style.body}>
        <CategoryOfPizza categoryItems={categoryItems} activeItem={activeItem} setActiveItem={setActiveItem}/>
        <PizzaField items={items} setItems={setItems} isLoading={isLoading} setIsLoading={setIsLoading}/>
      </div>
    </main>
  );
};

export default Main;