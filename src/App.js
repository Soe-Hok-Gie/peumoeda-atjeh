import React from "react";
import Biografi from "./components/Biografi";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";

const App = () => {
  return (
    <>
      <Navbar />
      <Profil />
      <Biografi />
    </>
  );
};

export default App;
