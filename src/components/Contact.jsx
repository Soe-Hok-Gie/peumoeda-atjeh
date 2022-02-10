import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>contact us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Nama
                </label>
                <input type="text" class="form-control" id="name" aria-describedby="name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  {" "}
                  Email
                </label>
                <input type="email" class="form-control" id="email" aria-describedby="email" />{" "}
              </div>
              <div class="mb-3">
                <label for="pesan" class="form-label">
                  Pesan
                </label>
                <textarea class="form-control" id="pesan" rows="3"></textarea>
              </div>
              <button type="submit" class="btn">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#765d69"
          fill-opacity="1"
          d="M0,256L48,266.7C96,277,192,299,288,261.3C384,224,480,128,576,122.7C672,117,768,203,864,245.3C960,288,1056,288,1152,282.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Contact;
