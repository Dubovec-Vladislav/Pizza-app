import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'

interface CategoryOfPizzaProps {
  categoryItems: string[];
  activeItem: string;
  setActiveItem: (newActiveItem: string) => void;
}

const CategoryOfPizza: FC<CategoryOfPizzaProps> = ({ categoryItems, activeItem, setActiveItem }) => {
  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        {
          categoryItems.map((item, index) => (
            item === activeItem
              ? <CategoryItem key={index} text={item} setActiveItem={setActiveItem} active />
              : <CategoryItem key={index} text={item} setActiveItem={setActiveItem} />
          ))
        }
      </div>
      <div className={style.sortMenu}>
        <SortMenu />
      </div>
    </section>
  );
};

export default CategoryOfPizza;