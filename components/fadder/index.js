import React from 'react';

const Fadder = () => {
  return (
    <div id="fadder">
      <div className="component fadder-content">
        <div className="fadder-description">
          <h1>Fadderukene.</h1>
          <p>
            I fadderukene blir du kjent med både linjeforeningen, NTNU og mange medstudenter. Dette er den
            første muligheten din til å stifte bekjentskaper som varer studietiden ut. Vi i Online anbefaler alle å ta del
            i det supre fadderopplegget vårt! Du trenger ikke å melde deg på fadderukene, så lenge du kommer på
            immatrikuleringen. Dersom du ikke har mulighet til å møte opp, kan du sende oss en <a href="mailto: velkom@online.ntnu.no">mail</a> så ordner vi det for deg.
          </p>
          <p>Fadderukene starter den 15. august både bachelor og master.</p>
          <p>
            For praktisk info rundt fadderukene se{' '}
            <a href="https://old.online.ntnu.no/wiki/online/fadderukene/2022-/" target="_blank" rel="noreferrer">
              her
            </a>
            .
          </p>
          <a href="#warning" className="skipToWarning">
            Opplevd noe ugreit? Ta kontakt!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fadder;
