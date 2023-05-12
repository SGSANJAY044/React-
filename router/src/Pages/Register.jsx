import React, { useRef, useState } from "react";

function Register(){
    const username=useRef(0);
    const password=useRef(0);
    const [gender,setGender]=useState('')
    const [skill,setSkill]=useState([])

    function handleSubmit(){
        alert('Username: '+username.current.value+'\nPassword: '+password.current.value+'\nGender: '+gender+'\nSkill: '+skill)
    }
    return(
        <form onSubmit={handleSubmit}>
            Username
            <input type='text' ref={username}/>
            <br />
            Password
            <input type='text' ref={password}/>
            <br />
            <div onChange={e=>setGender(e.target.value)}>
                <input type="radio" name="gender" value="Male" />Male
                <input type="radio" name="gender" value="Female" />Female
            </div>
            <div onChange={e=>setSkill((c)=>{
                if(!c.includes(e.target.value))
                    return([...c,e.target.value])
                return c.filter(t=> t!=e.target.value)
            })}>
                <input type="checkbox" name="gender" value="Male" />Male
                <input type="checkbox" name="gender" value="Female" />Female
            </div>
            <input type="submit" value="submit"/>        
        </form>
    )
}

export default Register;