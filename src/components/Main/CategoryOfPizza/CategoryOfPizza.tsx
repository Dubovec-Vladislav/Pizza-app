import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'
import CategoryItem from './CategoryItem'
import { useAppSelector } from '../../../assets/ts/hooks'
import { selectActiveCategoryItem, selectCategoryItems } from '../../../assets/redux/slices/filterSlice'

const CategoryOfPizza: FC = (props) => {
  const categoryItems = useAppSelector(selectCategoryItems);
  const activeCategoryItem = useAppSelector(selectActiveCategoryItem);

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
        <SortMenu />
      </div>
    </section>
  );
};

export default CategoryOfPizza;