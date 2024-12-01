import React, { useState } from 'react';
// import PDFViewer from './PDFViewer'; // Assurez-vous d'avoir un composant PDFViewer
import "../style/css/Projects.css"
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

function Shop() {
//   const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="Project_all">
      <div className="title">Store</div>
      <div className="project">
        {projects.map((project, index) => (
          <div className="box" key={index}>
            <img src={project.image} alt="logo" className="project-image" />
            <div className="text">Auto Clutch & Brake</div>
            <div className="text">Price: 100$</div>
          </div>
        ))}
      </div>

      {/* Affichage du PDF si sélectionné */}
      {/* {selectedPDF && (
        <PDFViewer pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
      )} */}
    </div>
  );
}

export default Shop;