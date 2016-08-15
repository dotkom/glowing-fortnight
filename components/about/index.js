const About = () => {
  return (
    <header id="about" className="component">
      <a href="/" id="about-mainPageButton">Gå til hovedsiden</a>

      <img className="about-header-logo" src="assets/images/online_logo.svg" alt="" />

      <h1>Velkommen til Online, linjeforeningen for informatikkstudenter ved <a href="http://ntnu.no/">NTNU</a>.</h1>
      <p className="about-description">Det er vi som sørger for at studietiden blir den beste tiden i ditt liv! Vi i Online arrangerer utflukter, turer, fester, holder kurs og bedriftspresentasjoner gjennom hele året.</p>

      <a href="#calendar" className="skipToCalendar">Hopp til program</a>
    </header>
  );
};

export default About;
