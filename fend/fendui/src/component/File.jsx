import React from 'react'
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import './File.css'
import { useNavigate } from 'react-router-dom';
export const File = (props) => {
    const handleFileShow = ()=>{
        console.log('directed to another url');
        window.open(props.url, '_blank');
      }
  return (
    <div className='logoicon' onClick={handleFileShow}>
        <div><PiMicrosoftWordLogoFill/></div>
        <div><span>{props.filename}</span></div>
          {/* Add any additional information or styling for the file icon */}
        </div>
  )
}
