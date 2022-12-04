import React from 'react'
import CoursalCard from './CoursalCard'
import './Coursal.css'

export default function Coursal(props) {
  
  const data = props.data;
    
  return (
    <>
     <div className="CardContainer">
        <CoursalCard value={data} />
        
      </div>
    </>
  )
}
