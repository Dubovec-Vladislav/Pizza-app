import React, { FC, Suspense } from 'react'
import style from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
// Components
import Header from '@components/Header/Header'
import Main from '@components/Main/Main'

const Basket = React.lazy(() => import(/* webpackChunkName: "Basket" */ '@components/Basket/Basket'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */  '@components/FullPizza/FullPizza'));
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */  '@components/UI/NotFoundPage/NotFoundPage'));

const App: FC = () => {
  // const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <Header />
        <Suspense fallback={<div className={style.loading}>Подождите, идет загрузка...</div>}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/basket' element={
              <Basket />
            } />
            <Route path='/pizza/:id' element={<FullPizza />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

// export const SearchContext = createContext<{
//   searchValue: string;
//   setSearchValue: (searchValue: string) => void;
// } | undefined>(undefined);

// <SearchContext.Provider value={{ searchValue, setSearchValue }}>
// </SearchContext.Provider>

export default App;
