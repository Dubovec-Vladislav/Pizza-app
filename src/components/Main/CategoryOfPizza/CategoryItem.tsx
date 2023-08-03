import React, { FC } from 'react'
import style from './CategoryItem.module.scss'

interface ICategoryItemProps {
  text: string,
  active?: boolean,
  setActiveCategoryItem: (text: string) => void;
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active, setActiveCategoryItem }) => {
  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}
      onClick={() => setActiveCategoryItem(text)}
    >{text}</div>
  );
};

export default CategoryItem;