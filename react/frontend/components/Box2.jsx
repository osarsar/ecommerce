import "../style/css/Box2.css";
import logistique from "../style/image/logistique.webp"

export default function Box2()
{
    return (
    <div className="solution_all2">
        <div className="box2">
            <div className="all_box">
                <p className="title2">- LOGISTIQUE<br></br> 
                    <p>Conçues pour répondre à vos besoins et à <br></br> vos exigences spécifiques, nos solutions<br></br>  logistiques  Intégréesà nos services <br></br> transport et transit, optimisent votre<br></br>  Supply Chain.</p>
                </p>
            </div>
            <img src={logistique} alt="flag"></img>
        </div>
   </div>)
}