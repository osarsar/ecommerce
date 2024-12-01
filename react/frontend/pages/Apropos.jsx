import Navbar from "../components/Navbar"
import Shop from "../components/Shop"
import Footer from "../components/Footer"
import big from "../style/image/big.jpg"
import histo from "../style/image/histo.jpg"
import valeur from "../style/image/valeur.png"
import valeur2 from "../style/image/valeur2.png"
import up from "../style/image/up1.jpeg"

import "../style/css/Apropos.css"

function Apropos()
{
    return (
        <div className="Apropos_all">
            <Navbar />
            <div className="product_up">
                <img src={up} alt="flag"></img>
            </div>
            <Shop/>
            
        </div>
);
};


export default Apropos
