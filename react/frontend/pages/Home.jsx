import Navbar from "../components/Navbar"
import Front from "../components/Front"
import Solution from "../components/Solution"
import Box2 from "../components/Box2"
import Connection from "../components/Connection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Element } from 'react-scroll';

function Home()
{
    return (
        <div>
        {/* <br></br> */}
        <Navbar />
        {/* <br></br> */}
        <Element name="acceuil">
            <Front/>
        </Element>
        {/* <br></br>
        <br></br> */}
        {/* <Element name="solution"> 
                <Solution />
        </Element>
        <br></br>
        <br></br>
        <Element name="Box2">
            <Box2 />
        </Element>
        <br></br>
        <br></br>
        <Element name="connection">
            <Connection />
        </Element>
        <br></br>
        <br></br> */}
        {/* <Element name="contact1">
            <Contact />
        </Element>
        <br></br>
        <br></br>
        <Footer /> */}
        </div>);
};

export default Home;