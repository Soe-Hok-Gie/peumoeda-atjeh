import React from "react";
import Biografi from "./components/Biografi";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Profil />
      <Biografi />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
