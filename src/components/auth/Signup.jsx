import React, { useState } from "react"

import { Link, useNavigate } from 'react-router-dom';

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import axios from "axios"

import "../styles/Styles.css"

const linkStyle ={
    color: "blue"

}

const signupContainer = {
    fontFamily: " 'Poppins', sans-serif",
    marginBottom: "30px"
}

function Signup(){

    const history = useNavigate()

    const[name, setName] = useState("")

    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")

    const[confirmPassword, setConfirmPassword] = useState("")

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:4000/signup",{
                name,email,password,confirmPassword
            }).then(res=>{
                if(res.data === "This user already exist in the database, please login"){
                    alert("This user already exist in the database")
                }else if(res.data === ""){
                    history("/")
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <div style={signupContainer} className="signup-container">
            <div className="signup-text-container">
                <br />
                <h3>Silicon verse</h3>

                <h2>Let's Get Started</h2>
            </div>
            <div className="signup-form-container">
                <form action="/signup" method="post"> <br />
                    <h2>Get Started <hr /> </h2>
                    <input name="name" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" /><FaUser className="icon" /> <br /><br />
                    <input name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" /><FaEnvelope className="icon" /> <br /><br />
                    <input name="password" type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" /><FaLock className="icon" /> <br /><br />
                    <input name="re-enter-password" type="text" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Re-enter password" /><FaLock className="icon" /> <br />
                    <button type="submit" onClick={submit} name="submitBtn">Sign up</button> <br />
                    <p>Already have an account?<Link to={"/login"}>Login</Link></p>
                </form> 
            </div>
        </div>
    )
}

export default Signup;