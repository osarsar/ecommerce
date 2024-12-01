import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import trans from "../style/image/transport1.jpg"
import "../style/css/Transport.css"

function Transport()
{
    return (
    <div>
        <Navbar />
        <div className="Transport_all">
                <img src={trans} alt="flag"></img>
                <p className="title"><span>- NOS TRANSPORTS</span><br/><br/>
                La société Hassouni Protrans se démarque par la diversité  et l'ampleur de son parc de véhicules, garantissant  une réponse diligente et scrupuleuse à toutes les sollicitations  de transport, quel que soit le caractère des marchandises  à acheminer - qu'elles soient périssables, dangereuses,  exceptionnelles ou variées. Notre engagement inébranlable se manifeste  à travers l'utilisation d'équipements modernes et de dispositifs  de camionnage de pointe, tels que le système de positionnement global (GPS), assurant ainsi une traçabilité et une sécurité optimales  sur les routes du monde entier.
                </p>
           
        </div>
         <Footer />
        </div>
);
};


export default Transport
