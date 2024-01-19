import imgLogo from '../../assets/logo_footer.png'

export default function Footer (){
    return (
        <footer>
            <h1>
                <img src={imgLogo} alt="Logo Kasa" />
            </h1>
            <p>
                  © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

