import React, { FC } from 'react'
import style from './FilterMenu.module.scss'
import SortMenu from '@components/UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'
import { useAppSelector } from '@hooks'
import { selectActiveCategory, selectCategoryItems } from '@categorySlice'

const FilterMenu: FC = React.memo((props) => {
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
});

export default FilterMenu;