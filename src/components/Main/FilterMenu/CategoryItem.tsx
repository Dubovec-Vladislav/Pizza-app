import React, { FC } from 'react'
import style from './CategoryItem.module.scss'
import { useAppDispatch } from '../../../assets/ts/hooks'
import { setActiveCategory } from '../../../assets/redux/slices/categorySlice'

interface ICategoryItemProps {
  text: string,
  active?: boolean,
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategory}` : `${style.categoryItem}`}
      onClick={() => dispatch(setActiveCategory(text))}
    >{text}</div>
  );
};

export default CategoryItem;



