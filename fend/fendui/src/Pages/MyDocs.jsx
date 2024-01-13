import React, { useEffect } from 'react'
import { NavBar } from '../component/NavBar'
import API_EP from '../utils/ApiEndPoint';
import { axiosPrivate } from '../api/axios/axios';
import { File } from '../component/File';
import './MyDocs.css'
import useAxiosPrivate from '../packages/Auth/useAxiosPrivate';
import { useState } from 'react';
// const files =[
//     {id:1,filename: "hellow", URL: "https://localhost:3000/"},
//     {id:2,filename: "ram" ,URL: "https://localhost:3000/"},
//     {id:3,filename: "sita" ,URL: "https://localhost:3000/"},
//     {id:4,filename: "adf" ,URL: "https://localhost:3000/"},
//     {id:5,filename: "fff" ,URL: "https://localhost:3000/"}
// ]
export const MyDocs = () => {
    const axiosPrivate = useAxiosPrivate();
    const [doc, setDoc] = useState(null);
    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getDocuments = async () =>{
            try{    
                const res = await axiosPrivate.get(`${API_EP.AUDIOPROCESS}`,{ signal: controller.signal});
                console.log(res.data);
                isMounted && setDoc(res.data);
            }catch(err){
                console.error(err);
            }
        }
        
        getDocuments();
        return() => {
            isMounted = false;
            controller.abort();
        }
    },[]);

  return (
    <div className='docx'>
    <NavBar/>
    <div className="files-container">
    {doc && doc.map((file)=>(
        <File key = {file.id} filename = {file.doc_name} url = {file.document}/>
    ))}
    {/* <div>MyDocs</div> */}
    </div>
    
    </div>
    
  )
}
