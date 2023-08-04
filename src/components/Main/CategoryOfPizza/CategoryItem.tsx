import React, { FC } from 'react'
import style from './CategoryItem.module.scss'
import { useAppDispatch } from '../../../assets/ts/hooks'
import { setActiveCategoryItem } from '../../../assets/redux/slices/filterSlice'

interface ICategoryItemProps {
  text: string,
  active?: boolean,
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}
      onClick={() => dispatch(setActiveCategoryItem(text))}
    >{text}</div>
  );
};

export default CategoryItem;



