import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import '../../styles/Error.css';

function Error () {
    return (
         <div>
            <Header/>
            <main className="Error_container Container">
                <div className="Error_infos">
                    <h1 className="Error_number"> 404 </h1>
                    <p className="Error_text"> Oups! La page que vous demandez n'existe pas. </p>
                </div>
                <li className="Error_return">
                    <Link to='/'> Retourner sur la page d'accueil</Link>
                </li>
            </main>
            <Footer/>
        </div>
    )
}
export default Error
