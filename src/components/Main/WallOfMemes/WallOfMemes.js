import React from 'react';
import first from '../../../images/doggy.svg';
import second from '../../../images/Boost_YouPoop.svg';
import third from '../../../images/Boost_Cool.svg';
import fourth from '../../../images/Boost_Feastables.svg';

function WallOfMemes() {

    return (
        <section className='wall-of-memes' id="wall-of-memes">
            <img className='wall-of-memes__image' src={first} alt="Doggy" />
            <div className='wall-of-memes__image-container'>
                <img className='wall-of-memes__small-image' src={second} alt="Юпуп" />
                <img className='wall-of-memes__small-image' src={third} alt="Cool" />
            </div>
            <img className='wall-of-memes__image' src={fourth} alt="Юпуп" />
        </section>)
}

export default WallOfMemes;
