import "../style/css/Navbar.css"
import React , {useState} from 'react'
import cart from "../style/image/cart.png"
import logo from "../style/image/AutoCyberSec.png"
import facebook from "../style/image/facebook.png"
import instagram from "../style/image/instagram.png"
import linkedin from "../style/image/linkedin.png"
import whatsapp from "../style/image/whatsapp.png"
import menu from "../style/image/menu2.png"
import { useNavigate} from 'react-router-dom';
import Logout from "../pages/Logout"

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
            <div className="all_logo">
            <a href="/"><img className="logo" src={logo} alt="logo"></img></a>
            <div>ACS</div>
            </div>
            <ul id="MenuList">
                <a href="/">Home</a>
                <a href="/Apropos">About</a>
                <a href="/Apropos">Shop</a>
                <a href="/Contact">Contact</a>
            </ul>
            <div className="right">

                <div class="contact">
                    <div><a href="/Login">Login</a></div>
                    <div>|</div>
                    <div><a href="/Register">Register</a></div>
                </div>
            <div>
                 <a href="/Cart"><img className="cart" src={cart} alt="logo"></img></a>
                {/* <Logout/> */}
            </div>
            </div>
            <div className="menu" >
            <img className="menu" onClick={ShowMenu} src={menu} alt="flag"></img>
            </div>

        </nav>);
}

export default Navbar;
