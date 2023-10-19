import React from "react";

const petProfiles = [
  {
    id: 1,
    image: "/snickers.jpg",
    name: "Snickers",
    age: 9,
    ownerName: "Jennie and Chris Megill",
    hobbies: [
      "Eating",
      "Laying on my back (preferably in the sun)",
      "Bird-watching",
    ],
    nicknames: ["Snicks", "Snickemswickemsbickemsthickems"],
    comment: [""],
  },
  {
    id: 2,
    image: "/MooMoo.jpg",
    name: "MooMoo",
    age: 6,
    ownerName: "Jennie and Chris Megill",
    hobbies: ["Purring", "Chasing red dots", "Being near mom always"],
    nicknames: ["Moo-Tastic", "Moolicious"],
    comment: [""],
  },
  {
    id: 3,
    image: "image-url-3.jpg",
    name: "Chicken",
    age: 3,
    ownerName: "Jennie and Chris Megill",
    hobbies: [
      "Laying on daddy always",
      "Trying new foods",
      "Messing with his sisters",
    ],
    nicknames: ["Chimin", "Chickcano", "Pollo"],
    comment: [""],
  },
  {
    id: 4,
    image: "image-url-4.jpg",
    name: "Bo",
    age: 2,
    ownerName: "Jennie and Chris Megill",
    hobbies: ["Collecting straws", "Climbing things", "Sucking his paw"],
    nicknames: ["Bo-Bo", "Robert(when being bad)"],
    comment: [""],
  },
  {
    id: 5,
    image: "toby.jpg",
    name: "Toby",
    age: 13,
    ownerName: "",
    hobbies: ["sleeping", "eating", "barking"],
    nicknames: ["Tobs", "Toby bobi"],
    comment: [""],
  },
  {
    id: 6,
    image: "jersey2.jpg",
    name: "Jersey",
    age: 10,
    ownerName: "",
    hobbies: ["sleeping", "short walks", "riding in car"],
    nicknames: ["Jerz", "baby girl"],
    comment: [""],
  },
  {
    id: 7,
    image: "reno.jpg",
    name: "Reno",
    age: 1,
    ownerName: "",
    hobbies: ["bird watching", "snuggling", "picking on sister"],
    nicknames: ["Renz", "reno meano"],
    comment: [""],
  },
  {
    id: 8,
    image: "cloud.jpg",
    name: "Cloud",
    age: 1,
    ownerName: "",
    hobbies: ["playing with big sister", "sleeping", "getting treats"],
    nicknames: ["cloudy", "ghost"],
    comment: [""],
  },
  {
    id: 9,
    image: "prince.jpg",
    name: "Prince",
    age: 3,
    ownerName: "",
    hobbies: ["singing", "talking", "looking in mirror"],
    nicknames: ["bird bird", "handsome"],
    comment: [""],
  },
  {
    id: 10,
    image: "image-url-4.jpg",
    name: "Krypto",
    age: 1,
    ownerName: "Michael Clark",
    hobbies: ["Barking", "Running Cows", "Playing with the kids"],
    nicknames: ["Stop", "Quit"],
    comment: [""],
  },
  {
    id: 11,
    image: "image-url-4.jpg",
    name: "Charlie",
    age: 1,
    ownerName: "Michael Clark",
    hobbies: ["Wrestling", "Hunting", "Chasing anything that moves"],
    nicknames: ["Dog", "Char"],
    comment: [""],
  },
  {
    id: 12,
    image: "image-url-4.jpg",
    name: "Jake",
    age: 1,
    ownerName: "Michael Clark",
    hobbies: ["Hide and Seek", "Biting Toes", "Attacking the dogs (playfully)"],
    nicknames: ["Kitty", "From StateFarm"],
    comment: [""],
  },
];

function PawFile() {
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

export default PawFile;
