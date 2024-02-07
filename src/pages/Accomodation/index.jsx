import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Slideshow';
import datas from '../../datas/datas';
import Error from '../Error';

export default function Accomodation () {
    const [imageViews, setImageViews] = useState([]);
    /* extraction la valeur du paramètre id de l'URL actuelle*/
    const {id} = useParams();
    /*filtre les élts du tableau datas et ne récupérer la data*/
    /* qui a identifiant= contenu variable id.*/
    /* stocke le résultat dans la variable dataCurrent */
    const dataCurrent = datas.filter(data => data.id ===id) 
    
    /*utilisation "useEffect"  pour mise à jour*/
    /* de la variable d'état imageViews */
    /* à chq chgt de la valeur id ou dataCurrent.*/
    /* Si id existe &  correspondance trouvé dans dataCurrent*/
    /*nvelle valeur imagesView = ppté pictures de dataCurrent*/
    useEffect(() => {if (dataCurrent.length>0)
         {setImageViews(dataCurrent[0].pictures);}},
     [id,dataCurrent]);
 /* si id n'existe pas renvoyer page d'erreur 404 ***/
     if (! dataCurrent) {  
        return <Error />}

    return (
        <div>
            <Header/>
            <Carousel views={imageViews}/>
            {/*  */}
            <Footer/>
        </div>
    )
}