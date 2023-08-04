import React, { FC } from 'react'
import style from './Search.module.scss'

const Search: FC = (props) => {
  return (
    <input className={style.search} placeholder='Поиск...'></input>
  );
};

export default Search;