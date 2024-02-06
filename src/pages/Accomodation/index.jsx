import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import datas from '../../datas/datas';
import Error from '../Error';

export default function Accomodation () {
    const [imageView, setImageView] = useState([]);
    const {id} = useParams();
    const dataCurrent = datas.filter(data => data.id ===id) 
    
    /* si id existe renvoyer appartement sinon page d'erreur 404 ***/
    useEffect(() => {if (dataCurrent.length>0)
         {setImageView(dataCurrent[0].pictures);}},
     [id,dataCurrent]);
     if (! dataCurrent) {  
        return <Error />}

    return (
        <div>
            <Header/>
            <Carousel views={imageView}/>
            {/* <img src={ dataCurrent[0].cover} alt={ dataCurrent[0].title } />
            <h1> {dataCurrent[0].title}</h1>
            <p> {dataCurrent[0].description } </p> */}
            <Footer/>
        </div>
    )
}