import  { useState } from 'react';
import arrowPrev  from '../../assets/Arrow_back.png';
import arrowNext from '../../assets/Arrow_forward.png';
import '../../styles/Carousel.css';

function  Slideshow ({ views })  {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  /* Fonction calcul index pour view suivante */
  const goToNextView = () => {
    setCurrentViewIndex (currentViewIndex + 1);
    if (currentViewIndex >= views.length-1) {
        setCurrentViewIndex (0);
    }
  };
  
   /* Fonction calcul index pour view précédente */
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
      <section className="carouselImage" >
        {/* /* Affiche view pièce en background  */}  
        {/* style={{ backgroundImage: `url(${views[currentViewIndex]})` }}  >   */}
        {/* Affiche les flèches de navigation précédente */}
        <div className="carouselImageContainer">
          <img src={views[currentViewIndex]} className="carouselImage"
          alt="CarouselImage" />
         </div>
        <button onClick={goToPreviousView} className="carouselArrow carouselArrowLeft">
            <img src={arrowPrev} alt="Previous" />
        </button>
        {/* Affiche les flèches de navigation suivante */}
        <button onClick={goToNextView} className='carouselArrow carouselArrowRight'>
            <img src={arrowNext} alt="Next" />
        </button>
      </section>
      </div>
      </main>
  );
};

export default Slideshow;
