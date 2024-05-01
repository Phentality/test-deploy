import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';

function Header(props) {
  const { isMobile } = useDeviceDetect();

  return (
    <header className='header'>
      <div className='header__content'>
        <p className='header__text'>mistaboost</p>
        <div className='header__navigation'>
          <a className='header__link' href="#about">about</a>
          <a className='header__link' href='#how-to-buy'>how to buy</a>
          {
            isMobile ? <a className='header__link' href='#wall-of-memes'>memes</a> : <a className='header__link' href='#wall-of-memes'>wall of memes</a>
          }
          <button className='header__button'>buy $MrBoost</button>
        </div>
      </div>
    </header>)
}

export default Header;