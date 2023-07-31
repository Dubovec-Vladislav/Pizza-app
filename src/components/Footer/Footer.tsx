import React, { FC } from 'react'
import style from './Footer.module.scss'

const Footer: FC = (props) => {
  return (
    <footer className={style.block}>
      <div className={style.body}>
        Footer
      </div>
    </footer>
  );
};

export default Footer;