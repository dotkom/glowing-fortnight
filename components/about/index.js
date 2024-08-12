import React from 'react';

const About = () => {
  return (
    <header id="about" className="component">
      <a href="https://online.ntnu.no/" id="about-mainPageButton">
        Gå til hovedsiden
      </a>

      <img className="about-header-logo" src="/images/2024-header.png" width={800} alt="" />

      <h1>
        Velkommen til Online, linjeforeningen for informatikkstudenter ved{' '}
        <a href="https://ntnu.no/" target="_blank" rel="noreferrer">
          NTNU
        </a>
        !
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
        <a href="https://online.ntnu.no/events/2265" target="_blank" rel="noreferrer">
          viktig info om IT-ekskursjonen
        </a>. OBS - kort frist!
      </p>
      {/* Temporary message added in relation to the extreme weather during the summer of 2023 */}

      <div>
        <a href="#calendar" className="skipToCalendar">
            Hopp til program
        </a>
        <a href="https://opptak.online.ntnu.no" target="_blank" rel="noopener noreferrer" className="goToGuac">
            Søk komité
        </a>
    </div>
    </header>
  );
};

export default About;
