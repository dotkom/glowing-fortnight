import React from 'react';

const Warning = () => {
  return (
    <div id="warning" className="component">
      <h1>Har du opplevd noe ugreit?</h1>
      <p>
      Online har to kontaktpersoner som kan hjelpe under fadderukene, Thea Karin Fladby (21) og Sindre Langaard (23). Vi ønsker at alle skal ha det bra og føle seg trygge under fadderukene. Derfor håper vi at du tar kontakt dersom du har opplevd noe ubehagelig. Ser du at noen andre opplever noe ubehagelig er det viktig å huske på at du også har et ansvar for å si ifra. Vi tar imot alt, og om du er i tvil er det bare å sende oss en melding. Tar du kontakt med oss vil all informasjon behandles strengt konfidensielt. Vi kan bistå med alt fra en uformell prat til å hjelpe deg med å oppsøke profesjonell hjelp eller rådgivning. 
      </p>
      <p>
        Om situasjonen tilsier at du trenger å snakke med noen umiddelbart kan du alltid ringe leder Mathias Fossum på
        958 29 020 eller faddersjef Robin Lund Sadun på 90 77 55 81.
      </p>
      <a
        href="mailto:siifra@online.ntnu.no?subject=[Varslingssak]"
        target="_blank"
        rel="noopener noreferrer"
        className="mailToWarning"
      >
        Send varsling
      </a>
    </div>
  );
};

export default Warning;
