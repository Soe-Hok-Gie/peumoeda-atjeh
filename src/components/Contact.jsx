import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h2>contact us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
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
                <input type="email" class="form-control" id="email" aria-describedby="email" />\{" "}
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
