import React from 'react';
import './FirstView.css';
import foodicon from '../image/foodIconhead.png'


import {FiMapPin} from 'react-icons/fi'



export default function FirstView() {
  return (
    <>
        <div className="container">
            <div className="main-container">
                <div className="foodTitle"><img src={foodicon} alt="not working" className='foodicon' /> DineMe<br/>

                <div className="sarcasm">
                That's what He and She said 😜
                </div>
                </div>

                <div className="titleContainer">
                    <div className="pickUpLine">Restaurants and more, </div>
                    <div className="pickUpLine">delivered to your door</div>
                </div>

                <div className="inputField">
                    <FiMapPin/>
                <input type="text" name="title" id="CTA" placeholder="Enter Delivery Address"   />
                <span className='btn'></span>
            </div>
                
            </div>
        </div>
     
    </>
  )
}
