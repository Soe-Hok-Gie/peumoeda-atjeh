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
        <path fill="#765d69" fill-opacity="1" d="M0,160L288,256L576,224L864,224L1152,320L1440,192L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default Contact;
