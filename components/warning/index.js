import React from 'react';

const Warning = () => {
  return (
    <div id="warning" className="component">
      <h1>Har du opplevd noe ugreit?</h1>
      <p>
        Online har et eget uavhengig organ for varslingssaker som kan hjelpe med alt. Vi ønsker at alle skal ha
        det bra og føle seg trygge. Derfor håper vi at du tar kontakt dersom du har opplevd noe
        ubehagelig under fadderukene. Ser du at noen andre opplever noe ubehagelig er det viktig å huske på at du også har et ansvar for å
        si ifra. Vi tar imot alt, og om du er i tvil er det bare å sende oss en melding. Tar du kontakt med oss vil all
        informasjon behandles strengt konfidensielt. Vi kan bistå med alt fra en uformell prat til å hjelpe deg med å
        oppsøke profesjonell hjelp eller rådgivning.
      </p>
      <p>Om situasjonen tilsier at du trenger å snakke med noen umiddelbart kan du alltid ringe oss på <a href="tel: +4795203046">952 03 046.</a></p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScvjEqVsiRIYnVqCNqbH_-nmYk3Ux6la8a7KZzsY3sJDbW-iA/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mailToWarning"
      >
        Ta kontakt her
      </a>
    </div>
  );
};

export default Warning;
