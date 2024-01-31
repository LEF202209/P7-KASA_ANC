import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import datas from '../../datas/datas';
import Error from '../Error';

export default function Accomodation () {
    const {id} = useParams();
    const dataCurrent = datas.filter(data => data.id ===id) 
    if (dataCurrent.length === 0) {
      
        return <Error />}
    /* si id existe renvoyer appartement sinon page d'erreur 404 ***/
    return (
        <div>
            <Header/>
            <img src={ dataCurrent[0].cover} alt={ dataCurrent[0].title } />
            <h1> {dataCurrent[0].title}</h1>
            <p> {dataCurrent[0].description } </p>
            <Footer/>
        </div>
    )
}