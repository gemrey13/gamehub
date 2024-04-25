import { useState, useEffect } from 'react';
import './Banner2.css'
import bannerImages from './data/data';

export default function Banner2() {
  const [activeSlide, setActiveSlide] = useState(0);

  function sliderHandler(addMinus) {
    if (addMinus === 1) {
      if (activeSlide === bannerImages.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(state => state + 1);
      }
    } else {
      if (activeSlide === 0) {
        setActiveSlide(bannerImages.length - 1);
      } else {
        setActiveSlide(state => state - 1);
      }
    }
  };

  useEffect(() => {
    const bannerInterval = setInterval(() => sliderHandler(1), 3000)

    return () => {
      clearInterval(bannerInterval);
    }
  }, [activeSlide]);

  return (
    <section className='banner'>
      <button className="slide-arrow" id="arrow-prev" onClick={() => sliderHandler(-1)} type='button'>&#8249;</button>
      <button className="slide-arrow" id="arrow-next" onClick={() => sliderHandler(1)} type='button'>&#8250;</button>
      <ul className="slides-container">
        {bannerImages.map(function(img, index) {
          return <li key={img + index}><img alt={'img' + index} className='slide2' src={img} style={{display: img + index === bannerImages[index] + activeSlide ? 'block' : 'none'}} /></li>;
        })}
      </ul>
      <ul className="pagination-container">
        {bannerImages.map(function(dot, index) {
          return <li className='dot' key={dot + index} onClick={() => setActiveSlide(index)} style={{backgroundColor: dot + index === dot + activeSlide ? 'black' : 'gray'}}></li>;
        })}
      </ul>
    </section>
  );
}