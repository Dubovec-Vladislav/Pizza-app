import React, { FC } from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'
import Search from '../UI/Search/Search'

interface HeaderProps {
  searchValue: string,
  setSearchValue: (searchValue: string) => void
}

const Header: FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
  return (
    <header className={style.block}>
      <div className={style.body}>
        <Link to='/' className={style.logo}><img src="/img/Header/logo.svg" alt="logo" /></Link>

        <div className={style.text}>
          <div className={style.title}>REACT PIZZA</div>
          <div className={style.subTitle}>самая вкусная пицца во вселенной</div>
        </div>

        <div className={style.searchOnBigDisplay}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <div className={style.counter}>
          <div className={style.cash}><Link to="#">520 ₽</Link></div>
          <div className={style.basket}>
            <Link to="/basket"><img src="/img/UI/cart.svg" alt="cart" /><span>3</span></Link>
          </div>
        </div>

        <div className={style.searchOnSmallDisplay}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
    </header>
  );
};

export default Header;