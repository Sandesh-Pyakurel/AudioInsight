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
    const [inputfile, setInputFile] = useState('');
    const [dfile, setDfile] = useState();
    const handleFileChange = (e)=>{
        const file= e.target.files[0];
        setSelFile(file);
    }
    const axiosPrivate = useAxiosPrivate();
    const Notification = ({ message, type }) => {
      const notificationStyle = {
        backgroundColor: '#dedede',
        //boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Black shadow
        padding: '10px',
        margin: '0 auto',
        width: '30vw',
      };
      return (
        <div style={{ ...notificationStyle, ...{ borderRadius: '0px' } }} className={`notification ${type}`}>
          <p>{message}</p>
        </div>
      );
    };
    const handleSubmit = async(e)=>{
      e.preventDefault();
      setErrMsg('');
      setClick(true);
      setSubmitted(false);
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
          formData.append("doc_name", inputfile);
          const res = await axiosPrivate.post(API_EP.AUDIOPROCESS, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res);
          setErrMsg('');
          setSubmitted(true);
          
        } catch (err)  {
          if (err.response) {
          if (err.response.status === 400) {
            setErrMsg("Bad Request: Check your request data");
          } else if (err.response.status === 401) {
            setErrMsg("Unauthorized: You are not authorized to perform this action");
          } else if (err.response.status === 404) {
            setErrMsg("Not Found: The requested resource was not found");
          } else {
            setErrMsg(`Error: ${err.response.status} Server Error.`);
          }
        } else if (err.request) {
          setErrMsg("No response received from the server");
        } else {
          console.error("Error:", err.message);
          setErrMsg("An unexpected error occurred");
        }
      }
    
        
        
    }
    const handleSelectChange = (e)=>{
      setSelectedOpt(e.target.value);
      
    }
    useEffect(()=>{
      console.log(selectedOpt);
      console.log(inputfile);

    },[selectedOpt, inputfile]);

    useEffect(()=>{
      const getDfile = async () =>{
        let isMounted = true;
        const controller = new AbortController();
        try{    
            const res = await axiosPrivate.get(`${API_EP.AUDIOPROCESS}`,{ signal: controller.signal});
            console.log(res.data[res.data.lenth - 1]);
            isMounted && setDfile(res.data[res.data.length-1]);
        }catch(err){
            console.error(err);
        }
    
    getDfile();
    return() => {
      isMounted = false;
      controller.abort();
    }}
    },[submitted]);
    
  return (
    <>
    <div className="choose">
      <div className="forminput">
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
      </div>
    
    <div className="selector">
      <select class="form-select" aria-label="Default select example" onChange={handleSelectChange} >
      <option disabled hidden selected>Choose Converted Document</option>
      <option value={type1}>Minute</option>
      <option value={type2}>LectureNotes</option>
      <option value={type3}>SpeechDocument</option>
    </select>
    </div>
    <div className= "documentname">
      <span>Filename For Document:</span>
      <input type="text" value = {inputfile} onChange={(e) => setInputFile(e.target.value)}/>
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
    {(submitted && !errMsg) ? (
      
      <div className="showconvertedfile"><div><File filename = {dfile.doc_name} url = {dfile.document}/></div></div>
      
    ) : (
      <>
        {errMsg ? <Notification message={errMsg} type="error" /> : null}
        {(click && !errMsg) ? <Loading /> : null}
      </>
    )}
    </div>
    
    
    
    </>
    
  )
}
