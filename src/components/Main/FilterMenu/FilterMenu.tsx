import React, { FC } from 'react'
import style from './FilterMenu.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'
import { useAppSelector } from '../../../assets/ts/hooks'
import { selectActiveCategory, selectCategoryItems } from '../../../assets/redux/slices/categorySlice'

const FilterMenu: FC = (props) => {
  const categoryItems = useAppSelector(selectCategoryItems);
  const activeCategory = useAppSelector(selectActiveCategory);

  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        {
          categoryItems.map((item, index) => (
            item === activeCategory
              ? <CategoryItem key={index} text={item} active />
              : <CategoryItem key={index} text={item} />
          ))
        }
      </div>
      <div className={style.sortMenu}>
        <SortMenu />
      </div>
    </section>
  );
};

export default FilterMenu;