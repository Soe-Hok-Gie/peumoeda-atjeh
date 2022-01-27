import React from "react";
import "./Style.css";

const Profil = () => {
  return (
    <section className="jumbotron text-center">
      <img src="assets/profil.png" width="25%" className="rounded-circle img-thumbnail" />
      <h1 className="display-4"> Peumoeda Atjeh</h1>
      <p className="lead">FrontEnd | Bachelor of Applied Computer</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L34.3,165.3C68.6,171,137,181,206,186.7C274.3,192,343,192,411,181.3C480,171,549,149,617,133.3C685.7,117,754,107,823,85.3C891.4,64,960,32,1029,53.3C1097.1,75,1166,149,1234,165.3C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Profil;
