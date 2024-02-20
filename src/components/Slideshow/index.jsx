import  { useState } from 'react';
import arrowPrev  from '../../assets/Arrow_back.png';
import arrowNext from '../../assets/Arrow_forward.png';
import '../../styles/Slideshow.css';

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
    if (currentViewIndex <= 0) {
        setCurrentViewIndex (views.length - 1);
    }
  };

  return (
    <section className="carousel">
      <div className="carouselImage" >
        <div className="carouselImageContainer">
          {/* Affiche chaque view */}
          <img src={views[currentViewIndex]} className="carouselImage"
          alt="CarouselImage" />
          </div>
          {/* Afficher arrow si plusieurs views seulement*/}
          {/*balises <> (fragments) pour regrouper les 2 éléments button*/}
          {views.length > 1 && 
         <>
            {/* Affiche les flèches de navigation précédente */}
            <button onClick={goToPreviousView} className="carouselArrow carouselArrowLeft">
              <img src={arrowPrev} alt="Previous" />
            </button>
            {/* Affiche les flèches de navigation suivante */}
            <button onClick={goToNextView} className='carouselArrow carouselArrowRight'>
                <img src={arrowNext} alt="Next" />    
            </button>
            {views.length> 0  && (
                // compteur d'imagesne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
            <span className="carouselPage">{currentViewIndex+1} / {views.length}</span> )}
          </>
      }
      </div>
      </section>
  );
};

export default Slideshow;
