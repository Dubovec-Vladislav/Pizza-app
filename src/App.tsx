import React, { FC, Suspense } from 'react'
import style from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// import Basket from './components/Basket/Basket'
import FullPizza from './components/FullPizza/FullPizza'
import NotFoundPage from './components/UI/NotFoundPage/NotFoundPage'

// export const SearchContext = createContext<{
//   searchValue: string;
//   setSearchValue: (searchValue: string) => void;
// } | undefined>(undefined);

const Basket = React.lazy(() => import('./components/Basket/Basket'));

const App: FC = () => {
  // const [searchValue, setSearchValue] = useState('');
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/pizza/:id' element={<FullPizza />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    // </SearchContext.Provider>
  );
}

export default App;
