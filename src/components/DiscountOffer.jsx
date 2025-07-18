import { useEffect, useState } from "react";

//use to change offer based on check box checked
function getRandomOffer()
{
    return (1000+Math.random()*500).toFixed(2);
}
function DiscountOffer()
{
    const [offerPrice, setofferPrice]= useState(getRandomOffer());
    const [isChecked,setisChecked]=useState(false);
    useEffect(()=>
    {
       if(isChecked){
        setInterval(() => {
           setofferPrice(getRandomOffer());//setofferPrice(1000);//
           //document.getElementById('price').innerHTML=1000;
        }, 3000);
    }
    },[isChecked])

    const handleChange=(e)=>
    {
        setisChecked(e.target.checked);
    }
    
return(
    <>
    <div className="offer" style={{backgroundColor: "yellow", fontSize: "30px"}}> 
        {/* styling using style property in two curly braces */}
        <h5>Offer Price </h5>
        <input type="checkbox" checked={isChecked} onChange={(e)=>handleChange(e)}/>Please select
        
        <p>Price: <b id='price'>{offerPrice}</b></p>


    </div>
    </>
    
)

}

export default DiscountOffer;