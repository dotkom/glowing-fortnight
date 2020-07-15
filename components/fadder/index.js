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
            i det supre fadderopplegget vårt!
          </p>
          <p>Fadderukene starter den 12. august etter immatrikuleringen for både bachelor og master.</p>
          <p>
            For praktisk info rundt fadderukene se{' '}
            <a href="https://online.ntnu.no/wiki/online/fadderukene/2020-/">her</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fadder;
