import React from 'react';

const Partners = () => {
  return (
    <footer id="partners">
      <div id="generalPartners">
        <a href="https://bekk.no/">
          <img className="partner" src="/splash/images/partners/bekk_hvit.png" alt="" />
        </a>
        <a href="https://www.accenture.com/">
          <img className="partner" src="/splash/images/partners/accenture_white.png" alt="" />
        </a>
      </div>
      <a href="https://www.soprasteria.no/">
        <img className="partner" id="wide_logo" src="/splash/images/partners/soprasteria_white.png" alt="" />
      </a>
      <a href="https://www.netlight.com/">
        <img className="partner" src="/splash/images/partners/netlight_hvit.png" alt="" />
      </a>
    </footer>
  );
};

export default Partners;
