import React, { createRef } from "react";

class DataBingingClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            fullName:'Kiran Vichare'
        }
        this.addressref=React.createRef();
    }

      handleClick = (e,str) => {
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

     handleChangeText=(e)=>
    {
     this.setState({
        fullName:e.target.value});
    }


render(){
    let name='Kiran';
    const {fullName}=this.state;
    return (

    
        <>
           
            <p>{name}</p>
            <input type='text' value={fullName} onChange={(e)=>this.handleChangeText(e)} />
            <p>Fullname={fullName}</p>
            <input type='button' value='Click Me' onClick={(e) => this.handleClick(e,'Hello')} />
            <br/>
            <input type="text" ref={this.addressrefaddressref}/>
            <hr/>
           
        </>
    )
}
}

export default DataBingingClass;