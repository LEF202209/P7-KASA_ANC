import  { useState, useEffect } from 'react';
import arrowPrev  from '../../assets/Arrow_back.png';
import arrowNext from '../../assets/Arrow_forward.png';
import '../../styles/Slideshow.css';

function  Slideshow ({ views })  {
  /* maj Image */
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  /* maj No Page */
  const [currentPageNumber, setCurrentPageNumber] = useState(`1/${views.length}`);
 /* chgt No page */
    useEffect(() => {if (views.length>0)
         {setCurrentPageNumber(`${currentViewIndex+1}/${views.length}`);}},
     [currentViewIndex,views.length]);

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
      <div className="carousel_image" >
        <div className="carousel_image_container">
          {/* Affiche chaque view */}
          <img src={views[currentViewIndex]} className="carousel_image"
          alt="CarouselImage" />
          </div>
          {/* Afficher arrow si plusieurs views seulement*/}
          {/*balises <> (fragments) pour regrouper les 2 éléments button*/}
          {views.length > 1 && 
         <>
            {/* Affiche les flèches de navigation précédente */}
            <button onClick={goToPreviousView} className="carousel_arrow carousel_arrow_left">
              <img src={arrowPrev} alt="Previous" />
            </button>
            {/* Affiche les flèches de navigation suivante */}
            <button onClick={goToNextView} className='carousel_arrow carousel_arrow_right'>
                <img src={arrowNext} alt="Next" />    
            </button>
            {views.length> 0  && (
                // compteur d'imagesne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
            // <span className="carouselPage">{currentViewIndex+1} / {views.length}</span> )}
            <span className="carousel_page_number">{currentPageNumber}</span> )}
            </>
      }
      </div>
      </section>
  );
};

export default Slideshow;
