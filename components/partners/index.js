import React from 'react';
import Image from 'next/image';
import bekk from 'public/images/partners/bekk_hvit.png';
import accenture from 'public/images/partners/accenture_white.png';
import twoS from 'public/images/partners/soprasteria_white.png';
import netlight from 'public/images/partners/netlight_hvit.png';

const Partners = () => {
  return (
    <footer id="partners">
      <div id="generalPartners">
        <a href="https://bekk.no/">
          <Image className="partner" src={bekk} alt="" />
        </a>
        <a href="https://www.accenture.com/">
          <Image className="partner" src={accenture} alt="" />
        </a>
      </div>
      <a href="https://www.soprasteria.no/">
        <Image className="partner" id="wide_logo" src={twoS} alt="" />
      </a>
      <a href="https://www.netlight.com/">
        <Image className="partner" src={netlight} alt="" />
      </a>
    </footer>
  );
};

export default Partners;
