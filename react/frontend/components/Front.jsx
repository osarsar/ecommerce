import "../style/css/Front.css";
import img_1 from "../style/image/1.jpeg"
import img_2 from "../style/image/2.jpeg"
import img_3 from "../style/image/3.jpeg"
import img_4 from "../style/image/4.jpeg"
import { useNavigate } from 'react-router-dom';


export default function Front()
{
    const navigate = useNavigate();
const handleScrollTo = (section) => {
    navigate('/', { state: { scrollTo: section } });
};
    return (
   <div className="full">
    <div className="all_img">
        <img className="down" src={img_1} alt="flag"></img>
        <img className="up" src={img_2} alt="flag"></img>
        <img className="down" src={img_3} alt="flag"></img>
        <img className="up" src={img_4} alt="flag"></img>
    </div>
    <div className="title">
        <div>Your Ultimate Online Store </div>
        <div className="p">or High-Quality Car Parts and Accessories</div>
    </div>
        {/* <div className="box">
            <div className="name"> - HassouniProtrans
                <div className="transport">Transport de Marchandise <br></br> National & International</div>
            </div>
                <a onClick={() => handleScrollTo('contact1')}><button className="contactus">Contact Us</button></a> */}
                
        {/* </div> */}
   </div>)
}