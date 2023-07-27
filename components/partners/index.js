import React from 'react';

const Partners = () => {
  return (
    <footer id="partners">
      <div id="generalPartners">
        <a href="https://bekk.no/" target="_blank" rel="noreferrer">
          <img className="partner" src="/images/partners/bekk_hvit.png" alt="" />
        </a>
        <a href="https://twoday.no/" target="_blank" rel="noreferrer">
          <img className="partner" src="/images/partners/twoday_white.png" alt="" />
        </a>
      </div>
      <a href="https://www.soprasteria.no/" target="_blank" rel="noreferrer">
        <img className="partner" id="wide_logo" src="/images/partners/soprasteria_white.png" alt="" />
      </a>
      <a href="https://www.knowit.no/" target="_blank" rel="noreferrer">
        <img className="partner" src="/images/partners/knowit_white.png" alt="" />
      </a>
    </footer>
  );
};

export default Partners;
