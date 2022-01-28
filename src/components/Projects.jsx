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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L10.4,69.3C20.9,75,42,85,63,80C83.5,75,104,53,125,53.3C146.1,53,167,75,188,101.3C208.7,128,230,160,250,197.3C271.3,235,292,277,313,266.7C333.9,256,355,192,376,170.7C396.5,149,417,171,438,202.7C459.1,235,480,277,501,266.7C521.7,256,543,192,563,186.7C584.3,181,605,235,626,218.7C647,203,668,117,689,106.7C709.6,96,730,160,751,202.7C772.2,245,793,267,814,245.3C834.8,224,856,160,877,154.7C897.4,149,918,203,939,213.3C960,224,981,192,1002,170.7C1022.6,149,1043,139,1064,154.7C1085.2,171,1106,213,1127,213.3C1147.8,213,1169,171,1190,144C1210.4,117,1231,107,1252,122.7C1273,139,1294,181,1315,202.7C1335.7,224,1357,224,1377,213.3C1398.3,203,1419,181,1430,170.7L1440,160L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
        ></path>
      </svg>
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
