import React from "react";

const Props = (props) => {
  return (
    <>
      <h1>About {props.name} !</h1>
      <img src={props.candidateImg} style={{ width: "100px" }} />
      <h2>My Name is {props.name}.</h2>
      <h2>Age:{props.age}</h2>
      <h2>Sex: {props.sex}</h2>
      <h2>Degerr: {props.degree}</h2>
      <h2>Current Orgination: {props.org}</h2>
    </>
  );
};

export default Props;
