import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Buy from './Buy/Buy';
import WallOfMemes from './WallOfMemes/WallOfMemes';

function Main(props) {
  return (
    <main>
        <Promo />
        <AboutProject />
        <Buy />
        <WallOfMemes />
    </main>
  )
}

export default Main;