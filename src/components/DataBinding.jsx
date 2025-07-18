import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserProvider";
import DataBindingClass from "./DataBindingClass";
import DataBingingClass from "./DataBinginClass";

function DataBinding() {

    const name = "Kiran";
    const {currentDate}=useContext(UserContext);
    const [fullName, setFullName]= useState('Kiran Vichare');//hook 
    const addressref = useRef();
    const handleClick = (e,str) => {
        e.target.value = 'Clicked Me';
        e.target.style.backgroundColor = 'yellow';
        alert('MEssage='+str);

        setTimeout(() => {
            e.target.value = 'Click Me';
        }, 1000)
        // alert('Welcome to handle Click');
        addressref.current.value="Mumbai";
        addressref.current.style.backgroundColor='red';
    }

    const handleChangeText=(e)=>
    {
     setFullName(e.target.value);
    }

    useEffect(()=>{
        console.log('Called USe Effect');}
    )


    return (
        <>
            <h3>This is my first component {currentDate}</h3>
            <p>{name}</p>
            <input type='text' value={fullName} onChange={(e)=>handleChangeText(e)} />
            <p>Fullname={fullName}</p>
            <input type='button' value='Click Me' onClick={(e) => handleClick(e,'Hello')} />
            <br/>
            <input type="text" ref={addressref}/>
            <hr/>
            <DataBindingClass/>
            <hr/>
            <DataBingingClass/>
        </>
    )
}
export default DataBinding