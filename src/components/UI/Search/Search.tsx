import React, { FC, useContext, useRef } from 'react'
import style from './Search.module.scss'
import { SearchContext } from '../../../App'

const Search: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)!;
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  const handleClearClick = () => {
    setSearchValue('');
    inputRef.current?.focus();
  }

  return (
    <div className={style.body}>
      <input className={style.input}
        ref={inputRef}
        value={searchValue}
        placeholder='Поиск пиццы...'
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {searchValue ? <span className={style.cross} onClick={handleClearClick}></span> : ''
      }
    </div >
  );
};

export default Search;