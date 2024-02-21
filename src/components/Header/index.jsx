import imgLogo from '../../assets/logo_header.png';
import  '../../styles/Header.css';
import Navbar from '../../components/Navbar'

export default function Header (){
    return (
        <header className='header container'>
            <div className="header_logo">
                <img src={imgLogo} alt="Logo Kasa" className="header_logo_img" />
            </div>
            <Navbar/>    
        </header>
    )
}

