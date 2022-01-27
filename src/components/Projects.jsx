import React from "react";

const Projects = () => {
  return (
    <section id="project">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Project</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src="assets/1.png" class="card-img-top" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src="assets/1.png" class="card-img-top" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src="assets/1.png" class="card-img-top" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
