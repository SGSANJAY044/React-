import React, { useRef } from "react";

function Register(){
    const username=useRef(0);
    const password=useRef(0);
    function handleSubmit(){
        alert('Username: '+username.current.value+'\nPassword: '+password.current.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            Username
            <input type='text' ref={username}/>
            <br />
            Password
            <input type='text' ref={password}/>
            <br />
            <input type="submit" value="submit"/>        
        </form>
    )
}

export default Register;