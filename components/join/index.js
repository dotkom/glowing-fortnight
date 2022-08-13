import React from 'react';

const Join = ({ applicationDeadline }) => {
  const applicationDeadlineDisplay = new Date(applicationDeadline).toLocaleString('nb-no').slice(0, -3);
  return (
    <div id="join" className="component">
      <h1>Bli aktiv i linjeforeningen!</h1>
      <p>
        Online er linjeforeningen for alle som studerer informatikk. Gå videre til <a href="https://online.ntnu.no/">hovedsiden</a>{' '}
        for å lage brukerkonto og bli medlem.
      </p>
      <p>
        Er det noe du lurer på om linjeforeningen Online? En kjapp
        innføring i dette kan du finne på{' '}
        <a
          href="https://online.ntnu.no/wiki/online/info/sosialt-og-okonomisk/ditt-liv-som-onliner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          wikien
        </a>
        .
      </p>
      <p>
        Har du lyst til å gjøre studietiden enda bedre? Som komitemedlem i Online blir du del av en
        familie du aldri vil glemme. Vi tilbyr utfordrende og spennende verv i et meget sosialt miljø med stor takhøyde.
      </p>
      <p>
        Søknadsfrist for komiteopptak er {applicationDeadlineDisplay}. Les mer om de ulike komiteene og send inn din
        søknad på opptakssiden vår i lenken under.
      </p>
      <a href="https://online.ntnu.no/applications" target="_blank" rel="noopener noreferrer" className="goToGuac">
        Gå til opptakssiden
      </a>
    </div>
  );
};

export default Join;
