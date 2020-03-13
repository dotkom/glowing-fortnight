import Head from "next/head";
import React from "react";

import About from "../components/about";
import Fadder from "../components/fadder";
import Partners from "../components/partners";
import Calendar from "../components/calendar";
import Join from "../components/join";
import Contact from "../components/contact";
import Slack from "../components/slack";
import Social from "../components/social";

const App = () => {
  return (
    <>
      <Head>
        <title>Fadderukene | Linjeforeningen Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About />
        <Fadder />
        <Calendar />
        <Join />
        <Slack />
        <Social />
        <Contact />
        <Partners />
      </div>
    </>
  );
};

export default App;
