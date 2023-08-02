import React, { FC } from 'react'
import style from './SizesItem.module.scss'

interface TypesItemProps {
  size: number,
  activeSize: number,
  setActiveSize: (size: number) => void,
}

const SizesItem: FC<TypesItemProps> = ({ size, activeSize, setActiveSize }) => {
  return (
    <li className={
      size === activeSize ?
        `${style.sizeType} ${style.activeSizeType}` :
        style.sizeType}
      onClick={() => setActiveSize(size)}
    >
      {size} см.
    </li>
  );
};

export default SizesItem;