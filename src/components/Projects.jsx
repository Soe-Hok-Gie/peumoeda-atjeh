import React from "react";
import CardProjects from "./CardProjects";

/// const Dataproject = [
//   {
//     jenis: "e-commerce",
//     details: [{ id: 1 }, { img: "assets/1.png" }, { desc: "Some quick example text to build on the card title and make up the bulk of the card's content." }],
//   },
//   {
//     jenis: "e-commerce",
//     details: [{ id: 1 }, { img: "assets/1.png" }, { desc: "Some quick example text to build on the card title and make up the bulk of the card's content." }],
//   },
//   {
//     jenis: "e-commerce",
//     details: [{ id: 1 }, { img: "assets/1.png" }, { desc: "Some quick example text to build on the card title and make up the bulk of the card's content." }],
//   },
// ];

const Dataproject = [
  {
    id: 1,
    img: "assets/1.png",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    img: "assets/kesehatan.png",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    img: "assets/team.png",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const Projects = () => {
  return (
    <section id="project">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Project</h2>
          </div>
        </div>
        <div class="row mb-4">
          {Dataproject.map((items) => {
            return <CardProjects img={items.img} desc={items.desc} />;
          })}
        </div>
      </div>
    </section>
  );
};

// nested map

// const Projects = () => {
//   return (
//     <section id="project">
//       <div className="container">
//         <div className="row text-center mb-3">
//           <div className="col">
//             <h2>Project</h2>
//           </div>
//         </div>
//         <div class="row mb-4">
//           {Dataproject.map((items) => {
//             <ul>{details.map(detail)}</ul>;
//             return <CardProjects img={items.img} desc={items.desc} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
export default Projects;
