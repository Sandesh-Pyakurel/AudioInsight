import React, { useState, useEffect, useRef} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import './login.css';
import axios from "../api/axios/axios";
import API_EP from "../utils/ApiEndPoint";
import useAuth from "../packages/Auth/useAuth";
    const Login = ()=>{
    const errRef = useRef();
    const userRef = useRef();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const handleText =(e) =>{ setUser(e.target.value); }
    const handlePass = (e) =>{ setPassword(e.target.value); }
    let navigate =useNavigate();
    const {auth,setAuth} = useAuth();
    useEffect(()=>{
    setErrMsg('');
    },[user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try{
            const res = await axios.post(API_EP.LOGIN, JSON.stringify({username: user, password:password}),
            {
                headers:{"Content-Type": "application/json"}
            }
            )
            console.log(JSON.stringify(res));
            const accessToken = res?.data?.token.access;
            const refreshToken = res?.data?.token.refresh;
            setAuth({user, password, accessToken, refreshToken});
            console.log(accessToken);
           // console.log('submitted');
           setUser('');
           setPassword('');
           setSuccess(true);
           console.log('success');
           console.log(res.data);
            
        }
        catch(err){
            if(!err?.response){
                console.log("No server Response");
                navigate("/conversion");
                
            }
            else if(err.response?.status === 400){
                setErrMsg("Insert Username and Password");
                navigate('/conversion')
                
            }
            else if(err.response?.status === 401){
                setErrMsg("Invalid username and password!");
                
            }
        }
       
        
        
    }
    return(
        
       <> 
        {success ? <Navigate to = "/conversion" /> : (
        
         
        <>
        <div className = "login_container">
        <p ref = {errRef} className = {errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
            
                <div className="title_login">
                        <h1>Login</h1>
                    <div className="username">
                        <label htmlFor="username" className="">Username: </label>
                        <input id = "username" value = {user} type = "text" onChange = {handleText} placeholder="Username" autoComplete="off" required/>
                    </div>
                    
                    <div className="passcode">
                        <label htmlFor="password" className ="">Password: </label>
                        <input id = "password" value = {password} type = "password" onChange = {handlePass} placeholder="Passcode" autoComplete="off" required/>
                    </div>
                    <div className="loginbtn">
                        <input type = "submit" value = "login"/>
                    </div>
                    <div className="linker">
                    <button onClick = {()=>navigate("/Register")} >Don't have an account. <span>Register here.</span></button>
                    </div>
                    
                </div>
            </form>
        </div>
        </>
        
    )}
        </>
        



    );
}
export default Login;