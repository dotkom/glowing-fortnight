import React from 'react';

const Fadder = () => {
  return (
    <div id="fadder">
      <div className="component fadder-content">
        <div className="fadder-description">
          <h1>Fadderukene.</h1>
          <p>
            I fadderukene skal du få bli kjent med både linjeforeningen, NTNU og mange medstudenter. Dette er den
            viktigste portalen for å stifte bekjentskaper som varer studietiden ut. Vi i Online anbefaler alle å ta del
            i det supre fadderopplegget vårt! Du trenger ikke å melde deg på fadderukene, så lenge du kommer på
            immatrikuleringen. Dersom du ikke har mulighet til å møte opp, kan du sende oss en mail så fikser vi deg en
            faddergruppe.
          </p>
          <p>Fadderukene starter den 16. august etter immatrikuleringen for både bachelor og master.</p>
          <p>
            For praktisk info rundt fadderukene se{' '}
            <a href="https://online.ntnu.no/wiki/online/fadderukene/2021-/">her</a>
          </p>
          <a href="#warning" className="skipToWarning">
            Opplevd noe ugreit? Ta kontakt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fadder;
