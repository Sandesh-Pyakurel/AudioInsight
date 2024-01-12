import React, {useRef, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TiTick} from "react-icons/ti";
import './Register.css'
import Login from "../Pages/login";
import axios from "../api/axios/axios";
import API_EP from "../utils/ApiEndPoint";
const user_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const name_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const pass_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#_$!&])/;
export const Register = (props) =>{
    //const userRef = useRef();
    const errRef = useRef();
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    
    const [password, setPassword] = useState('');
    const [validP, setValidP] = useState(false);
    
    const [matchP, setMatchP] = useState('');
    const [validMatchP, setValidMatchP] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        const result = user_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);

    },[user]);
    useEffect(()=>{
        const result = pass_REGEX.test(password); // it is boolean.
        console.log(result);
        console.log(password);
        setValidP(result);
        const match = password === matchP;
        setValidMatchP(match);
    },[password, matchP]);

    useEffect(()=>{
        setErrMsg('');

    },[user, password, matchP]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const case1 = user_REGEX.test(user);
        const case2 = pass_REGEX.test(password);
        if(!case1 || !case2){
            setErrMsg("Enter valid Value");
            return;
        }
        
        try{
            console.log(user);
            console.log(password);
            const res = await axios.post(API_EP.REGISTER, 
                JSON.stringify({ first_name: fname, last_name: lname, username: user, password : password}),
                {
                    headers: {'Content-Type': 'application/json'}
                }
                )
                
                console.log(JSON.stringify(res));
                setSuccess(true);
        }
        catch(err){
            if(!err?.response){
                setErrMsg("NO SERVER RESPONSE!");
            }
            else if(err.response?.status === 409){
                setErrMsg("Username Used");
            }
            else if(err.response?.status ===400){
                setErrMsg("Bad Request Error");
            }
            else{
                setErrMsg("Something went wrong, Try with alternate password!");
            }
            
        }

    }
    let navigate = useNavigate();
    return (
        <>
        {success ? <Login/> : (
            <>
         
        <div className="reg_container">
            <div>
            <p ref = {errRef} className = {errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            </div>
            
        <form onSubmit={handleSubmit}>
                <div className="title_reg">
                        <h1 className="text-2xl flex justify-center my-4">Register</h1>
                    <div className="fname">
                        <div><label htmlFor="FirstName" className="">First Name: </label></div>
                        
                        <div><input value = {fname} onChange = {(e)=>{setFName(e.target.value);}}id = "fname" type = "text" placeholder = "FirstName" autoComplete="off" required/></div>
                        
                    </div>
                    <div className="lname">
                        
                        <label htmlFor="LastName" className="">Last Name: </label>

                        <input value = {lname}  onChange = {(e)=>{setLName(e.target.value);}}id = "lname" type = "text" 
                        placeholder = "LastName" autoComplete="off" required/>
                    </div>
                    
                    <div className="uname ">
                    
                        <label htmlFor="UserName" >UserName: <span className={validUser ? "valid" : "hide"}><TiTick/></span></label>
                        <div className= "unamecol">
                       <input value = {user}  onChange = {(e)=>{setUser(e.target.value);}} id = "user" type = "text" placeholder = "Username"
                       aria-invalid = {validUser ? "false" : "true"} 
                       aria-describedby="uidnote" autoComplete = "off"
                       required/>
                       <p id = "uidnote" className = {user && !validUser ? "instructions" : "offscreen"}>
                            {`~`} must contain 4-24 characters.<br/>
                            symbols numbers allowed<br/>
                        </p> 
                        </div>


                    </div>
                    {/* <div className="grid grid-cols-2 ">
                        <label htmlFor="confirm_email" className ="">Confirm Email : </label>
                         <input value = {user} className = "border-2 border-slate-400 rounded p-1 " onChange = {(e)=>{setUser(e.target.value);}}id = "confirm_email" type = "email" placeholder = "Confirm Username"/>

                    </div> */}
                    <div className="pw">
                        <label htmlFor="password" className ="">Password: <span className={validP ? "valid" : "hide"}><TiTick/></span></label>
                        <div className= "unamecol">
                        <input value = {password} onChange = {(e)=>{setPassword(e.target.value);}}id = "password" type = "password" placeholder = "password"
                        aria-invalid = {validP ? "false" : "true"} 
                        aria-describedby="uidnote" autoComplete = "off"
                        required/>
                        <p id = "uidnote" className = {password && !validP ? "instructions" : "offscreen"}>
                             {`~`} must contain atleast 1 Capital case.<br/>
                             must include atleast 1 symbol and number <br/>
                         </p>
                        </div>
                         
                    </div>
                    <div className="cpw ">
                        <label htmlFor="password" className ="">Confirm Password: <span className={validP && validMatchP ? "valid" : "hide"}><TiTick/></span></label>
                        <div className= "unamecol">
                        <input value = {matchP} onChange = {(e)=>{setMatchP(e.target.value);}}id = "confirm_password" type = "password" placeholder = "Confirm password"
                         aria-invalid = {validMatchP ? "false" : "true"} 
                         aria-describedby="uidnote" autoComplete = "off"
                         required/>
                         <p id = "uidnote" className = {matchP && !validMatchP ? "instructions" : "offscreen"}>
                            must match the above passcode.<br/>
                          </p> 
                        </div>
                        
                        
                    </div>
                    

                    <div className="loginbtn">
                        <input type = "submit" value = "Submit" className="button rounded bg-blue-500 px-6 py-2"/>      
                    </div>
                    <div className="linker">
                    <button onClick = {()=>navigate("/login")} className="linkbtn my-6">Already have an account? Login here.</button>
                    </div>
                
             </div>
            

        </form>
        </div>
        </>
        )}
        </>
        
    );
}

