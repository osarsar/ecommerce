import Navbar from "../components/Navbar"
import Front from "../components/Front"
import Solution from "../components/Solution"
import Box2 from "../components/Box2"
import Connection from "../components/Connection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Element } from 'react-scroll';

export default function Contacts()
{
    return (
        <div>
        <Navbar />
        {/* <Element name="acceuil">
            <Front/>
        </Element> */}
        <Contact/>
        </div>);
};