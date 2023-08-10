import React from 'react';

const About = () => {
  return (
    <header id="about" className="component">
      <a href="https://online.ntnu.no/" id="about-mainPageButton">
        Gå til hovedsiden
      </a>

      <img className="about-header-logo" src="/images/online_logo.svg" alt="" />

      <h1>
        Velkommen til Online, linjeforeningen for informatikkstudenter ved{' '}
        <a href="https://ntnu.no/" target="_blank" rel="noreferrer">
          NTNU
        </a>
        .
      </h1>
      <p className="about-description">
        Det er vi som sørger for at studietiden blir den beste tiden i ditt liv! Vi i Online arrangerer utflukter,
        turer, fester, holder kurs og bedriftspresentasjoner gjennom hele året.
      </p>

      <p>
        Vi har samlet litt info for nye informatikere. Ta en titt på{' '}
        <a href="https://online.ntnu.no/wiki/online/ny-paa-informatikk/" target="_blank" rel="noreferrer">
          wikien
        </a>{' '}
        for å sjekke den ut!
      </p>
      <p>
        Ny på master? Se{' '}
        <a href="https://online.ntnu.no/events/2089" target="_blank" rel="noreferrer">
          her
        </a>{' '}
        for viktig info om IT-ekskursjonen. OBS - kort frist!{' '}
      </p>
      {/* Temporary message added in relation to the extreme weather during the summer of 2023 */}
      <p>
        <b>
          NB! Vi er klar over at ekstremværet &quotHans&quot har gjort det vanskelig for mange å komme seg til
          Trondheim, men ikke bekymre dere! Det ordner seg uansett, og dere vil ikke miste noen muligheter hos oss.
          Dersom du har noen spørsmål, ikke nøl med å kontakte oss på{' '}
          <a href="mailto:kontakt@online.ntnu.no">kontakt@online.ntnu.no</a>. Vi ses!
        </b>
      </p>

      <a href="#calendar" className="skipToCalendar">
        Hopp til program
      </a>
    </header>
  );
};

export default About;
