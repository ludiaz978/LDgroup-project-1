import React from "react";
// import prince from "images/prince.jpg";
import petProfiles from "../data/petProfiles";

function Pawfile() {
  return (
    <div className="paw-file">
      {petProfiles.map((pet) => (
        <div key={pet.id} className="profile">
          <img src={pet.image} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p>Age: {pet.age}</p>
          <p>Owner: {pet.ownerName}</p>
          <p>Hobbies: {pet.hobbies.join(", ")}</p>
          <p>Nicknames: {pet.nicknames.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Pawfile;
