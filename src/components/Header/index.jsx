import {Link} from 'react-router-dom';
import imgLogo from '../../assets/logo_header.png'
import  '../../styles/Header.css'

export default function Header (){
    return (
        <div className='container'>
            <h1>
                <img src={imgLogo} alt="Logo Kasan" />
            </h1>
            <nav>
                <Link to="/"> Accueil</Link>
                <Link to="/about"> A propos</Link>
            </nav>
        </div>
    )
}

