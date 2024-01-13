import React, { useEffect } from 'react'
import { NavBar } from '../component/NavBar'
import API_EP from '../utils/ApiEndPoint';
import { axiosPrivate } from '../api/axios/axios';
import { File } from '../component/File';
import './MyDocs.css'
const files =[
    {id:1,filename: "hellow", URL: "https://localhost:3000/"},
    {id:2,filename: "ram" ,URL: "https://localhost:3000/"},
    {filename: "sita" ,URL: "https://localhost:3000/"},
    {filename: "adf" ,URL: "https://localhost:3000/"},
    {filename: "fff" ,URL: "https://localhost:3000/"}
]
export const MyDocs = () => {
    // useEffect(()=>{
    //     let isMounted = true;
    //     const controller = new AbortController();
    //     const getDocuments = async () =>{
    //         try{    
    //             const res = await axiosPrivate.get(`${API_EP.SECTIONS}${props.id}/chapters/`,{ signal: controller.signal});
    //             console.log(res.data);
    //             isMounted && setDocuments(res.data);
    //         }catch(err){
    //             console.error(err);
    //         }
    //     }
        
    //     getDocuments();
    //     return() => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // },[]);
  return (
    <>
    <NavBar/>
    <div className="files-container">
    {files.map((file)=>(
        <File key = {file.id}filename = {file.filename} url = {file.URL}/>
    ))}
    {/* <div>MyDocs</div> */}
    </div>
    
    </>
    
  )
}
