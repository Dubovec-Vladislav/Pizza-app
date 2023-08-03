import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'

interface CategoryOfPizzaProps {
  categoryItems: string[],
  activeCategoryItem: string,
  setActiveCategoryItem: (newActiveCategoryItem: string) => void,

  sortItems: string[],
  activeSort: boolean,
  toggleActiveSort: (activeSort: boolean) => void,
  activeSortItem: string,
  setActiveSortItem: (item: string) => void,
}

const CategoryOfPizza: FC<CategoryOfPizzaProps> = ({
  categoryItems, activeCategoryItem, setActiveCategoryItem,
  sortItems, activeSort, toggleActiveSort, activeSortItem, setActiveSortItem
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
          sortItems={sortItems}
          activeSort={activeSort}
          toggleActiveSort={toggleActiveSort}
          activeSortItem={activeSortItem}
          setActiveSortItem={setActiveSortItem}
        />
      </div>
    </section>
  );
};

export default CategoryOfPizza;