import React from "react";

const Biografi = () => {
  return (
    <section id="biografi">
      <div className="container">
        <div className="row text-center my-3">
          <div className="col">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos error neque minima qui ea unde praesentium ab consequatur architecto?</p>
          </div>
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nisi assumenda. Nulla, blanditiis. Unde, quasi ea neque blanditiis reiciendis ipsum rerum reprehenderit! Numquam ea asperiores voluptate vitae consequatur fugit
              eligendi aut, facere repellat fugiat autem, enim, hic sint nesciunt optio.
            </p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,128L34.3,122.7C68.6,117,137,107,206,133.3C274.3,160,343,224,411,250.7C480,277,549,267,617,234.7C685.7,203,754,149,823,122.7C891.4,96,960,96,1029,128C1097.1,160,1166,224,1234,245.3C1302.9,267,1371,245,1406,234.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Biografi;
