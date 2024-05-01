import React from 'react';

function AboutProject() {

  return (
    <section className='about-project' id="about">
      <div className='about-project__container'>
        <div className='about-project__image'></div>
        <div className="about-project__text-container">
          <p className='about-project__title'>Mista BOOST</p>
          <p className='about-project__text'>Mista Boost, is an American <a className='about-project__link' href='https://en.wikipedia.org/wiki/YouTuber'>YouTuber</a>,
            online personality, entrepreneur, and philanthropist.
            He is known for his fast-paced and high-production videos,
            which feature elaborate challenges and large giveaways.
            <a className='about-project__link' href='https://en.wikipedia.org/wiki/MrBeast#cite_note-15'>&#91;13&#93;</a> With over 250 million subscribers, he is the most-subscribed individual on YouTube and 
            the <a className='about-project__link' href='https://en.wikipedia.org/wiki/List_of_most-subscribed_YouTube_channels'>second-most-subscribed channel overall</a>.</p>
        </div>
      </div>
    </section>)
}

export default AboutProject;