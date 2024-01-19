import Header from '../../components/Header';
import {Link} from 'react-router-dom';

function Error () {
    return (
        <div>
            <div>
                <Header/>
                <h1> La page que vous cherchez n'existe pas. </h1>
            </div>
            <Link to='/'> Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error
