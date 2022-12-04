import React, { useState,useEffect } from 'react'
import Coursal from './Coursal';
import  './ThirdView.css';

export default function ThirdView() {
    

    const [search,setSearch] = useState("");
    const [btnValue,setbtnValue] = useState("orange");
    const apikey = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${btnValue}?query=${btnValue}&apiKey=96a3052c31c549b697f30aee47939b02`;

    const updateText = (e) => {
        setSearch(e.target.value);
        // console.log(search);
    }

    const [mainData,setMainData] = useState([])
    useEffect(()=>{
        getData();
    },[btnValue])

    const handleSearch = () => 
    {
        setbtnValue(search);
        setSearch("");
        console.log(mainData);
    }
    const getData = async () =>
    {
        const data = await fetch(apikey);
        const JSONdata = await data.json();
        // console.log(JSONdata);
        setMainData(JSONdata);
    }




  return (
    <>
        <div className="thirdContainer">
            <div className="firstBox">
                <div className="head">You Craving for?</div> 
                <div className="inputFooditem">
                    <input type="text"  className='itemInput' placeholder='Enter food Item name' autoComplete='off' value={search} onChange={updateText}  />
                </div>
                <div className="enterBtn" onClick={handleSearch}>
                    Check the items
                </div>  

            </div>

            <div className="secondBox">
                <Coursal data={mainData}/>
            </div>
        </div>
    </>
  )
}
