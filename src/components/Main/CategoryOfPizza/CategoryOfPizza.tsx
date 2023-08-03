import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'

interface CategoryOfPizzaProps {
  categoryItems: string[],
  activeCategoryItem: string,
  setActiveCategoryItem: (newActiveCategoryItem: string) => void,

  // ---------- SortMenu ---------- // 
  sortTypes: string[],
  activeSortType: string,
  setActiveSortType: (item: string) => void,
}

const CategoryOfPizza: FC<CategoryOfPizzaProps> = ({
  categoryItems, activeCategoryItem, setActiveCategoryItem,
  sortTypes, activeSortType, setActiveSortType
}) => {

  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        {
          categoryItems.map((item, index) => (
            item === activeCategoryItem
              ? <CategoryItem key={index} text={item} setActiveCategoryItem={setActiveCategoryItem} active />
              : <CategoryItem key={index} text={item} setActiveCategoryItem={setActiveCategoryItem} />
          ))
        }
      </div>
      <div className={style.sortMenu}>
        <SortMenu
          sortTypes={sortTypes}
          activeSortType={activeSortType}
          setActiveSortType={setActiveSortType}
        />
      </div>
    </section>
  );
};

export default CategoryOfPizza;