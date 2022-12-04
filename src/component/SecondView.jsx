import React from 'react'
import  './SecondView.css'
import Card from './Card'

import first from '../image/ScootScoot.svg'
import second from '../image/Storefront.svg'
import third from '../image/iphone.svg'

export default function SecondView() {
  
  return (
    
    <>
      <div className="secondContainer">
        <div className="smallContainer">
          <Card imgPath={first} dataInd={`As a delivery driver, you'll make reliable money—working anytime, anywhere.`} title={`Become a Dasher`} btnData={`Start earning `}/>
          <Card imgPath={second} dataInd={`Grow your business and reach new customers by partnering with us.`} title={`Become a Partner`} btnData={ `Sign Up your Store`}/>
          <Card imgPath={third} dataInd={`Experience the best your neighborhood has to offer, all in one app.`} title={ `Become a Dasher`} btnData={`Try the App`}/>
          
        </div>
      </div>
    </>
  )
}
