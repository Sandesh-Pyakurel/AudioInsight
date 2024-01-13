import React from 'react'
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import './File.css'
import { useNavigate } from 'react-router-dom';
export const File = (props) => {
    const navigate = useNavigate();
    const handleFileShow = ()=>{
        console.log('directed to another url');
        window.open(props.url, '_blank');
      }
  return (
    <div className='logoicon' onClick={handleFileShow}>
          <PiMicrosoftWordLogoFill/>
          <span>{props.filename}</span>
          {/* Add any additional information or styling for the file icon */}
        </div>
  )
}
