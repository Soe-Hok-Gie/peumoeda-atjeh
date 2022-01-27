import React from "react";
import Biografi from "./components/Biografi";
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
    </>
  );
};

export default App;
