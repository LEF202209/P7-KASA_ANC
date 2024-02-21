import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import '../../styles/ErrorPage.css';

function Error () {
    return (
         <div>
            <Header/>
            <main className="container error_container">
                <h1 className="error_number"> 404 </h1>    
                <p className="error_text"> Oups! La page que vous demandez n'existe pas. </p>
                <li className="error_return">
                    <Link to='/'> Retourner sur la page d'accueil</Link>
                </li>
            </main>
            <Footer/>
        </div>
    )
}
export default Error
