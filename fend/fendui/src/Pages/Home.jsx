import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate('/login');
  }
  return (
    <>
    <div className="screen">
      <div className='title'>
        <span>
          Smart Audio Transcriber
        </span>
        <br/>
        <br/>
      </div>
      <div className="subtitle">
        <span>
        Converts Audio into formatted Document.
          <br/>
          Get your required Documents Now.
          
        </span>
      </div>
      <div className="getStarted">
        <button onClick={handleNavigation}>Get Started</button>
      </div>
    </div>
    </>
    
    
    )
    
}
