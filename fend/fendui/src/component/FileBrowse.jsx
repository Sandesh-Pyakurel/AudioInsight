import React, { useEffect } from 'react'
import './FileBrowse.css'
import { useState } from 'react';

import {Loading }from './Loading'
import { File } from './File';
export const FileBrowse = () => {
    const type1 = 'minute';
    const type2 = 'lecture';
    const type3 = 'speech';
    const [selFile, setSelFile]= useState(null);
    const [selectedOpt, setSelectedOpt] = useState(null);
    const [showFileIcon, setShowFileIcon] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleFileChange = (e)=>{
        const file= e.target.files[0];
        setSelFile(file);
    }
    
    const handleSubmit = ()=>{
        if(selFile && selectedOpt){
            console.log(selFile);
            console.log(selectedOpt);
        }
        setSubmitted(true);
        
    }
    const handleSelectChange = (e)=>{
      setSelectedOpt(e.target.value);
      
    }
    useEffect(()=>{
      console.log(selectedOpt);
    },[selectedOpt])
    
  return (
    <>
    <div className="choose">
    <div class="mb-3">
    <label for="formFile" class="form-label">Choose your Audio:</label>
    <input
        className="form-control"
        type="file"
        id="formFile"
        accept = "audio/*"
        onChange={handleFileChange}
    />
    </div>
    <div className="selector">
      <select class="form-select" aria-label="Default select example" onChange={handleSelectChange} >
      <option disabled hidden selected>Choose Converted Document</option>
      <option value={type1}>Minute</option>
      <option value={type2}>LectureNotes</option>
      <option value={type3}>SpeechDocument</option>
</select>
    </div>
    <div>
    <button className = "filebutton"
          type="button"
          onClick={handleSubmit}
          disabled={!selFile}
        >
          Submit
    </button>
    </div>
    </div>
    {(!showFileIcon)? (
      <File />
        
      ) : (
        <>
          {submitted ? <Loading/> : <></>}
        </>
        
        
      )}
    
    </>
    
  )
}
