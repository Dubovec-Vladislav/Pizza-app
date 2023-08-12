import React, { FC } from 'react'
import style from './Header.module.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Search from '../UI/Search/Search'
import { useAppSelector } from '../../assets/ts/hooks'
import { selectBasketTotalNumberOfPizzas, selectBasketTotalPriceOfPizzas } from '../../assets/redux/slices/basketSlice'

const Header: FC = (props) => {
  const totalNumberOfPizzas = useAppSelector(selectBasketTotalNumberOfPizzas);
  const totalPriceOfPizzas = useAppSelector(selectBasketTotalPriceOfPizzas);

  return (
    <header className={style.block}>
      <div className={style.body}>
        <Link to='/' className={style.logo}><img src="/img/Header/logo.svg" alt="logo" /></Link>

        <div className={style.text}>
          <div className={style.title}>PIZZA SITE</div>
          <div className={style.subTitle}>самая вкусная пицца во вселенной</div>
        </div>

        <div className={style.searchOnBigDisplay}>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/basket' element={<></>} />
          </Routes>
        </div>

        <div className={style.counter}>
          <div className={style.cash}><Link to="#">{totalPriceOfPizzas} ₽</Link></div>
          <div className={style.basket}>
            <Link to="/basket"><img src="/img/UI/cart.svg" alt="cart" /><span>{totalNumberOfPizzas}</span></Link>
          </div>
        </div>

        <div className={style.searchOnSmallDisplay}>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/basket' element={<></>} />
          </Routes>
        </div>
      </div>
    </header>
  );
};

export default Header;