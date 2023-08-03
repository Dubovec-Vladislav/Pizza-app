import React, { FC } from 'react'
import style from './CategoryItem.module.scss'

interface ICategoryItemProps {
  text: string,
  active?: boolean,
  setActiveItem: (text: string) => void;
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active, setActiveItem }) => {
  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}
      onClick={() => setActiveItem(text)}
    >{text}</div>
  );
};

export default CategoryItem;