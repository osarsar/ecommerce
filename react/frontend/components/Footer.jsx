import "../style/css/Footer.css";
import logo from "../style/image/logo.png"
import facebook from "../style/image/facebook.png"
import instagram from "../style/image/instagram.png"
import linkedin from "../style/image/linkedin.png"
import whatsapp from "../style/image/whatsapp.png"
import { useNavigate } from 'react-router-dom';

export default function Footer()
{
    const navigate = useNavigate();
    const handleScrollTo = (section) => {
    navigate('/', { state: { scrollTo: section } });
    }
    return (
    <div class="footer_all">
        <div class="left">
            <a href="/Hassouni_Protrans/"><img src={logo} alt="flag"/></a>
            <div class="contact2">
                <a href="#"><img src={facebook} alt="flag"/></a>
                <a href="https://www.instagram.com/hassouni_protrans/?utm_source=qr&igsh=dGgzamV0MW5xdDA1"> <img src={instagram} alt="flag"/></a>
                <a href="https://www.linkedin.com/in/ahmed-hassouni-b22896272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer="><img src={linkedin} alt="flag"/></a>
                <a href="https://wa.me/212661201103"><img src={whatsapp} alt="flag"/></a>
            </div>
        </div>
        <div class="middle">
                <h4>- Contact</h4>
                <p>
                    GSM: +212 6 61 20 11 03<br/>
                    FIXE: +212 5 30 16 30 51<br/>
                    FAX: +212 5 30 16 30 51<br/>
                    Email: HASSOUNIPROTRANS@GMAIL.COM<br/>
                    SIEGE SOCIAL: 22, APPT12, RUE JBEL MOUSSA, AGDAL RABAT-MAROC
                </p>
        </div>
        <div class="right">
                <h4>- All Paths</h4>
                <a href="/Hassouni_Protrans/">Accueil</a>
                <a href="/Hassouni_Protrans/#/Apropos">Apropos</a>
                <a onClick={() => handleScrollTo('solution')}>Nos Solutions</a>
                <a href="/Hassouni_Protrans/#/Transport">Transport</a>
                <a onClick={() => handleScrollTo('connection')}>Connection</a>
                <a onClick={() => handleScrollTo('contact1')}>Contact</a>
        </div>
   </div>)
}