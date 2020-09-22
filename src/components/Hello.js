import React from 'react';
import './Hello.css';
import imgURL from './../assets/avatar.jpg';

const person = { name: 'KAMIL', age: 24 };
const Hello = () => (
  <React.Fragment>
    <div className="greet">
      <img id="greet" src={imgURL} />
    </div>
    <h1 className="greet">Hello,</h1>
    <h2 className="greet">
      MY NAME IS {person.name} {person.age}YO AND THIS IS MY RUSUME/CV
    </h2>
  </React.Fragment>
);
export default Hello;
