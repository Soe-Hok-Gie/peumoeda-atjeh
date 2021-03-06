import React from "react";

// nested
// const CardProjects = (item, detail) => {
//   return (
//     <div class="col-md-4 mb-3">
//       <div class="card">
//         <ul>{detail}</ul>
//         <img src={item.img} class="card-img-top" alt="..." />
//         <div class="card-body">
//           <p class="card-text">{item.desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const CardProjects = (item) => {
  return (
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src={item.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
