import Navbar from "../components/Navbar"
import Front from "../components/Front"
import Solution from "../components/Solution"
import Box2 from "../components/Box2"
import Connection from "../components/Connection"
import Contact from "../components/Contact"
import Register from "../components/Register"
import Footer from "../components/Footer"
import { Element } from 'react-scroll';
import up from "../style/image/up1.jpeg"


export default function Registers()
{
    return (
        <div>
        <Navbar />
        <div className="product_up">           
            <img src={up} alt="flag"></img>
        </div>
        <Register />
        </div>);
};