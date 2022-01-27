import React from "react";
import "./Profil.css";

const Profil = () => {
  return (
    <section className="jumbotron text-center">
      <img src="assets/profil.png" width="25%" className="rounded-circle img-thumbnail" />
      <h1 className="display-4"> Peumoeda Atjeh</h1>
      <p className="lead">Developer | Bachelor of Applied Computer</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,256L34.3,234.7C68.6,213,137,171,206,176C274.3,181,343,235,411,218.7C480,203,549,117,617,85.3C685.7,53,754,75,823,80C891.4,85,960,75,1029,64C1097.1,53,1166,43,1234,69.3C1302.9,96,1371,160,1406,192L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Profil;
