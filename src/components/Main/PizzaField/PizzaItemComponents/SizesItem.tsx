import React, { FC } from 'react'
import style from './SizesItem.module.scss'

interface TypesItemProps {
  size: number,
  sizes: number[],
  activeSize: number,
  setActiveSize: (size: number) => void,
  setActivePrice: (size: number) => void,
}

const SizesItem: FC<TypesItemProps> = ({ size, sizes, activeSize, setActiveSize, setActivePrice }) => {
  const handleSizeClick = () => {
    setActiveSize(size);
    setActivePrice(sizes.indexOf(size))
  }

  return (
    <li className={
      size === activeSize ?
        `${style.sizeType} ${style.activeSizeType}` :
        style.sizeType}
      onClick={handleSizeClick}
    >
      {size} см.
    </li>
  );
};

export default SizesItem;