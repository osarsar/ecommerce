import "../style/css/Solution.css";
import transport from "../style/image/transport.jpeg"


export default function Solution()
{
    return (
    <div className="solution_all">
        <h1 className="solution">Nos Solution</h1>
        <div className="box1">
            <img src={transport} alt="flag"></img>
            <div className="all_box">
                <p className="title">- TRANSPORT<br></br> 
                <p>On rapproche vos marchés avec<br></br> des solutions de transport <br></br> intégrées et évolutives couvrant la voie <br></br> commerciale Europe- Maroc.</p>
                </p>
            </div>
        </div>
   </div>)
}