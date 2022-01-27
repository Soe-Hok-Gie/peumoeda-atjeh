import React from "react";
import Biografi from "./components/Biografi";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Profil />
      <Biografi />
      <Project />
    </>
  );
};

export default App;
