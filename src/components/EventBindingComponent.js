import { useState,useEffect } from "react";

export default function EventBindingComponent(){
    const [userName, setUserName]=useState('John');

    function handleUserName(e){
        setUserName(e.target.value)
    }



    return(
        <div className="container-fluid">
            <dl>
                <dt>Username</dt>
                <dd><input type="text" value ={userName} onChange={handleUserName}/></dd>
            </dl>
            <h3>Hello! {userName}</h3>
        </div>
    )
}