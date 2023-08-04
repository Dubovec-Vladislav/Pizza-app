import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'
import { useAppSelector } from '../../../assets/ts/hooks';

interface CategoryOfPizzaProps {
  categoryItems: string[],

  // ---------- SortMenu ---------- // 
  sortTypes: string[],
  activeSortType: string,
  setActiveSortType: (item: string) => void,
}

const CategoryOfPizza: FC<CategoryOfPizzaProps> = ({
  categoryItems, sortTypes,
  activeSortType, setActiveSortType
}) => {

  const activeCategoryItem = useAppSelector((state) => state.filter.activeCategoryItem);

  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        {
          categoryItems.map((item, index) => (
            item === activeCategoryItem
              ? <CategoryItem key={index} text={item} active />
              : <CategoryItem key={index} text={item} />
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