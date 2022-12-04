import React from "react";
import "./CoursalCard.css";
export default function CoursalCard(props) {
  const allData = props.value;
  let len = allData.length;
    if(len===0){
        return(
            <h1>Oops! you may misspelled</h1>
        )
    }
    else len = 1;

  return (
    <>
      {allData.map((data) => {
        return (
          <div className="card-diff" key={data.title}>
            <img src={data.image} alt="Avatar" className="card-diff-img" />
          </div>
        );
      })}
    </>
  );
}
