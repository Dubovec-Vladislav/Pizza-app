import React, { FC } from 'react'
import style from './Search.module.scss'

interface SearchProps {
  searchValue: string,
  setSearchValue: (searchValue: string) => void
}

const Search: FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={style.body}>
      <input className={style.search}
        value={searchValue}
        placeholder='Поиск пиццы...'
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {searchValue ? <span className={style.cross} onClick={() => setSearchValue('')}></span> : ''}
    </div>
  );
};

export default Search;