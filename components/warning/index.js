import React from 'react';

const Warning = () => {
  return (
    <div id="warning" className="component">
      <h1>Har du opplevd noe ugreit?</h1>
      <p>
        Dersom du har blitt utsatt for en ubehagelig opplevelse i løpet av fadderukene så kan du ta kontakt med de
        tillitsvalgte for fadderukene, Thea Karin Flatby og Sindre Langaard ved å trykke på knappen under. De kommer til
        å behandle all informasjonen de mottar strengt konfidensielt og vil ta kontakt for å hjelpe så fort som mulig.
      </p>
      <p>
        Om situasjonen tilsier at du trenger å snakke med noen umiddelbart kan du alltid ringe leder Mathias Fossum på
        XX XX XX XX eller faddersjef Robin Lund Sadun på YY YY YY YY.
      </p>
      <a
        href="mailto:thea.karin.fladby@online.ntnu.no,sindre.langaard@online.ntnu.no?subject=[Varslingssak]"
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
