import React from 'react';
import { Link } from 'react-router-dom';

import './styledComponents/Footer.scss';

function Footer() {
  return (
    <>
      <div className="contact">
        <div className="bloc">
          <Link to="/contact_us">
            <h1>CONTACT US</h1>
          </Link>

          <div className="logo">
            <img
              src="https://freepikpsd.com/wp-content/uploads/2019/10/adresse-icone-png-6-Transparent-Images.png"
              alt="adresse"
            />
            <p>4 Avenue des Saules - Bâtiment le Doge - 59160 LILLE</p>
          </div>
          <div className="logo">
            <img
              src="https://e7.pngegg.com/pngimages/519/73/png-clipart-email-computer-icons-symbol-logo-prototype-miscellaneous-text.png"
              alt="mail"
            />
            <p>p2g3.github@gmail.com</p>
          </div>
          <div className="logo">
            <img
              src="https://img.icons8.com/metro/452/cell-phone.png"
              alt="phone"
            />
            <p>01 23 45 67 89</p>
          </div>
        </div>
      </div>
      <div className="infos">
        <a
          href="https://www.wildcodeschool.com/fr-FR/condition-generales-utilisation"
          className="link"
        >
          General Conditions of Use
        </a>
        <a
          href="https://www.wildcodeschool.com/fr-FR/charte-donnees-personnelles"
          className="link"
        >
          Personal Data Charter
        </a>
        <h3>©2021 WILD & SONS. ALL RIGHTS RESERVED</h3>
      </div>
    </>
  );
}
export default Footer;
