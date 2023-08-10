import React, { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react'
import style from './Search.module.scss'
import debounce from 'lodash.debounce'
import { selectSearchValue, setSearchValue } from '../../../assets/redux/slices/searchSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../assets/ts/hooks'

const Search: FC = (props) => {
  const dispatch = useDispatch();
  const search = useAppSelector(selectSearchValue);
  const [value, setValue] = useState(search);
  useEffect(() => setValue(search), [search]);
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(debounce((string) => {
    dispatch(setSearchValue(string));
  }, 300), []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  const handleClearClick = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  }

  return (
    <div className={style.body}>
      <input className={style.input}
        ref={inputRef}
        value={value}
        placeholder='Поиск пиццы...'
        onChange={handleInputChange}
      ></input>
      {value ? <span className={style.cross} onClick={handleClearClick}></span> : ''
      }
    </div >
  );
};

export default Search;