import React, { useState } from 'react';
// import PDFViewer from './PDFViewer'; // Assurez-vous d'avoir un composant PDFViewer
import "../style/css/Product_Details.css"
// import docker from '../style/image/docker.png';
// import awslogo from '../style/image/awslogo.png';
// import windows from '../style/image/windows.png';
// import ml from '../style/image/ml.png';
// import net from '../style/image/net.png';
// import web from '../style/image/web.png';

// Importation des fichiers PDF
import ml from "../style/image/p1.jpeg";
import windows from "../style/image/p2.jpeg";
import net from "../style/image/p4.jpeg";
import web from "../style/image/p3.jpeg";
import { useNavigate} from 'react-router-dom';


const projects = [
  {
    // image: docker,
    image: ml,
    title: 'Containerized WordPress with Nginx, MariaDB, and SSL',
    // pdf: dockerProjectPDF,
  },
  {
    // image: awslogo,
    image: windows,
    title: 'Containerized WordPress on AWS with WAF, OWASP, and HTTPS',
    // pdf: awsProjectPDF,
  },
  {
    image: windows,
    title: 'Securing Active Directory Infrastructure and Simulation of Attacks with GNS3',
    // pdf: windowsProjectPDF,
  },
  {
    image: ml,
    title: 'Predictive Maintenance Powered By Machine Learning',
    // pdf: mlProjectPDF,
  },
  {
    image: net,
    title: 'Network Security with Advanced Threat Protection',
    // pdf: netProjectPDF,
  },
  {
    image: web,
    title: 'Securing Web Applications with WAF, JWT, HTTPS, and GDPR Compliance',
    // pdf: webProjectPDF,
  },
  {
    // image: docker,
    image: ml,
    title: 'Containerized WordPress with Nginx, MariaDB, and SSL',
    // pdf: dockerProjectPDF,
  },
  {
    // image: awslogo,
    image: windows,
    title: 'Containerized WordPress on AWS with WAF, OWASP, and HTTPS',
    // pdf: awsProjectPDF,
  },
  {
    image: windows,
    title: 'Securing Active Directory Infrastructure and Simulation of Attacks with GNS3',
    // pdf: windowsProjectPDF,
  },
  {
    image: ml,
    title: 'Predictive Maintenance Powered By Machine Learning',
    // pdf: mlProjectPDF,
  },
  {
    image: net,
    title: 'Network Security with Advanced Threat Protection',
    // pdf: netProjectPDF,
  },
  {
    image: web,
    title: 'Securing Web Applications with WAF, JWT, HTTPS, and GDPR Compliance',
    // pdf: webProjectPDF,
  },
  {
    // image: docker,
    image: ml,
    title: 'Containerized WordPress with Nginx, MariaDB, and SSL',
    // pdf: dockerProjectPDF,
  },
  {
    // image: awslogo,
    image: windows,
    title: 'Containerized WordPress on AWS with WAF, OWASP, and HTTPS',
    // pdf: awsProjectPDF,
  },
  {
    image: windows,
    title: 'Securing Active Directory Infrastructure and Simulation of Attacks with GNS3',
    // pdf: windowsProjectPDF,
  },
  {
    image: ml,
    title: 'Predictive Maintenance Powered By Machine Learning',
    // pdf: mlProjectPDF,
  },
  {
    image: net,
    title: 'Network Security with Advanced Threat Protection',
    // pdf: netProjectPDF,
  },
  {
    image: web,
    title: 'Securing Web Applications with WAF, JWT, HTTPS, and GDPR Compliance',
    // pdf: webProjectPDF,
  },
];



function Details() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/Product_Details'); // Redirige vers la page spécifique du projet
  };

//   const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="Product_Details_all">
      <div className="title">Product Details</div>
      <div className="project">
        <div>
            <img src={windows} alt="logo" className="project-image" />
        </div>
        <div className='right'>
            <div className='ptitle'>
            Hanging 4K Camera<br/>
            <span>Price: $325.00</span>
            </div>
            <div className='p'>
            Pursue pleasure rationally encounter consequences that are extremely painful. 
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circles
            Pursue pleasure rationally encounter consequences that are extremely painful. 
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
            because it is pain, but because occasionally circles occur in and pain can procure him 
            some great ple cum solute nobie est eligendi option
            </div>
            <div className='buttom'>
                ADD TO CART
            </div>
        </div>
        {/* {projects.map((project, index) => (
          <div onClick={handleRedirect} className="box">           
          <img src={project.image} alt="logo" className="project-image" />
            <div className="text">Auto Clutch & Brake</div>
            <div className="text">Price: 1000$</div>
          </div>
        ))} */}
      </div>

      {/* Affichage du PDF si sélectionné */}
      {/* {selectedPDF && (
        <PDFViewer pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
      )} */}
    </div>
  );
}

export default Details;