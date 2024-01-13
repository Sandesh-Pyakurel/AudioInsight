import React, { useEffect } from 'react'
import './FileBrowse.css'
import { useState } from 'react';
import { axiosPrivate } from '../api/axios/axios';
import API_EP from '../utils/ApiEndPoint';
import {Loading }from './Loading'
import { File } from './File';
import useAxiosPrivate from '../packages/Auth/useAxiosPrivate';
export const FileBrowse = () => {
    const type1 = 'meeting';
    const type2 = 'lecture';
    const type3 = 'speech';
    const [selFile, setSelFile]= useState(null);
    const [selectedOpt, setSelectedOpt] = useState(null);
    const [showFileIcon, setShowFileIcon] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [click, setClick] = useState(false);
    const handleFileChange = (e)=>{
        const file= e.target.files[0];
        setSelFile(file);
    }
    const axiosPrivate = useAxiosPrivate();
    const handleSubmit = async(e)=>{
      e.preventDefault();
      setClick(true);
      let userID;
        if(selFile && selectedOpt){
            console.log(selFile);
            console.log(selectedOpt);
        }
        try{
          const res0 = await axiosPrivate.get(API_EP.USERS);
          console.log(res0.data);
          userID = res0.data.id;
        }catch(err){
          console.log(err);
        }
        try {
          const formData = new FormData();
          formData.append("user", userID);
          formData.append("audio", selFile);
          formData.append("type", selectedOpt);
          const res = await axiosPrivate.post(API_EP.AUDIOPROCESS, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res);
          setErrMsg("successfully Added Assigment");
          
        } catch (err) {
          setErrMsg("Cannot Add File. First Add Chapter");
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
    {submitted ? (
      <File />
        
      ) : (
        <>
          {click ? <Loading/> : <></>}
        </>
        
        
      )}
    
    </>
    
  )
}
