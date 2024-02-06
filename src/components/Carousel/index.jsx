import  { useState } from 'react';
import arrowPrev  from '../../assets/left_arrow.png';
import arrowNext from '../../assets/right_arrow.png';
import '../../styles/Carousel.css';

function  Carousel ({ views })  {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const goToNextView = () => {
    setCurrentViewIndex (currentViewIndex + 1);
    if (currentViewIndex >= views.length-1) {
        setCurrentViewIndex (0);
    }
  };
  
  const goToPreviousView = () => {
    setCurrentViewIndex (currentViewIndex - 1);
    console.log(currentViewIndex+ "nbre "+views.length+"lien "+views[currentViewIndex])
    if (currentViewIndex <= 0) {
        setCurrentViewIndex (views.length - 1);
    }
  };


  
  return (
    <main className='Container'>
    <div className="carousel">
      <section className="carouselImage"    
        style={{ backgroundImage: `url(${views[currentViewIndex]})` }}  >  
        {/* Affiche les flèches de navigation */}
        <button onClick={goToPreviousView} className="carouselArrow carouselArrowLeft">
            <img src={arrowPrev} alt="Previous" />
        </button>
        <button onClick={goToNextView} className='carouselArrow carouselArrowRight'>
            <img src={arrowNext} alt="Next" />
        </button>
      </section>
      </div>
      </main>
  );
};

export default Carousel;
