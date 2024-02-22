import imgLogo from '../../assets/logo_footer.png'
import '../../styles/Footer.css';

export default function Footer (){
    return (
        <footer >
            <img src={imgLogo} alt="Logo Kasa" className='footer_logo' />
            <div className='footer_text_container'>
                {/* <p className='footer_text'> */}
                  <p>  © 2020 Kasa. All rights reserved </p>
                {/* </p> */}
            </div>
        </footer>
    )
}

