import React from 'react';
import youPoop from '../../../images/YouPoop.svg';
import telega from '../../../images/Telega.svg';
import telegaS from '../../../images/Telega_small.svg';
import twit from '../../../images/Twit.svg';
import twitS from '../../../images/Twit_small.svg';
import unknown from '../../../images/Unknown.svg';
import unknownS from '../../../images/Unknown_small.svg';
import mrBoost from '../../../images/MrBoost.svg';
import useDeviceDetect from '../../../hooks/useDeviceDetect';

function Promo() {
  const { isMobile } = useDeviceDetect();
  const [formValue, setFormValue] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return (
    <section className='promo'>
      <div className='promo__container'>
        <img className='promo__image' src={youPoop} alt="Юпуп" />
        <div className='promo__text-container'>
          <p className='promo__bold-text'>$MrBOOST</p>
          <p className='promo__text'>subscribe for mems</p>
        </div>
        {
          isMobile ? <img className="promo__avatar" src={mrBoost} alt="МистерБуст" /> : ''
        }
      </div>
      <div className='promo__social-container'>
        <button className="promo__social-link"> {
          isMobile ? <img src={telegaS} alt="Telega" /> : <img src={telega} alt="Telega" />
        }</button>
        <button className="promo__social-link"> {
          isMobile ? <img src={twitS} alt="X" /> : <img src={twit} alt="X" />
        }</button>
        <button className="promo__social-link"> {
          isMobile ? <img src={unknownS} alt="Unknown" /> : <img src={unknown} alt="Unknown" />
        } </button>
      </div>
      <form className='promo__form'>
        <input className='promo__input'
          id='email'
          name='email'
          onChange={handleChange} />
      </form>
    </section>)
}

export default Promo;