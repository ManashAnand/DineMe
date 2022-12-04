import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
   <>
    <div className="card">
        <img src={props.imgPath} alt="Avatar"/>
        <div className="img-container">
            <h4><b>{props.title}</b></h4>
            <p>{props.dataInd}</p>
          <div className="addbtn">{props.btnData} →</div>
        </div>
    </div>
   </>
  )
}
