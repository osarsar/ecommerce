import "../style/css/Navbar.css"
import React , {useState} from 'react'
import logo from "../style/image/logo.png"
import facebook from "../style/image/facebook.png"
import instagram from "../style/image/instagram.png"
import linkedin from "../style/image/linkedin.png"
import whatsapp from "../style/image/whatsapp.png"
import menu from "../style/image/menu2.png"
import { useNavigate} from 'react-router-dom';

function Navbar()
{
    const [showAproposMenu, setShowAproposMenu] = useState(false);
    const toggleAproposMenu = () => {
        setShowAproposMenu(!showAproposMenu);
    };

    function ShowMenu() {
    var menu = document.getElementById("MenuList");
    menu.classList.toggle("visible");
    };

    const navigate = useNavigate();
    const handleScrollTo = (section) => {
    navigate('/', { state: { scrollTo: section } });
    };

    const handleScrollTo2 = (section) => {
        navigate('/Apropos', { state: { scrollTo: section } });
    };

    return (
        <nav>
            <div>
            {/* <a href="/"><img className="logo" src={logo} alt="logo"></img></a> */}
                Ecommerce
            </div>
            <ul id="MenuList">
                <a href="/">Home</a>
                <a href="/Apropos">About</a>
                <a href="/Apropos">Shop</a>
                <a href="/Contact">Contact</a>
            </ul>
            <div class="contact">
                <a href="/Login">Login</a>|
                <a href="/Register">Register</a>
            </div>
            <div className="menu" >
            <img className="menu" onClick={ShowMenu} src={menu} alt="flag"></img>
            </div>

        </nav>);
}

export default Navbar;
