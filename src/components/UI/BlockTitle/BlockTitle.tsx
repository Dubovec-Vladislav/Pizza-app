import React, { FC } from 'react'
import style from './BlockTitle.module.scss'


interface IBlockTitleProps {
  text: string,
}

const BlockTitle: FC<IBlockTitleProps> = ({ text }) => {
  return (
    <div className={style.title}>{text}</div>
  );
};


export default BlockTitle;