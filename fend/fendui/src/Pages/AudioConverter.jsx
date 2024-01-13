import React from 'react'
import './AudioConverter.css'
import { useEffect } from 'react'
import { NavBar } from '../component/NavBar'
import { FileBrowse } from '../component/FileBrowse'
import axiosPrivate from '../packages/Auth/useAxiosPrivate'
import API_EP from '../utils/ApiEndPoint'
export const AudioConverter = () => {
  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController();
    const getPdf = async () =>{
        // try{    
        //     const res = await axiosPrivate.get(`${API_EP.SECTIONS}${props.id}/chapters/`,{ signal: controller.signal});
        //     console.log(res.data);
        //     isMounted && setSyllabus(res.data);
        // }catch(err){
        //     console.error(err);
        // }
    }
    
    getPdf();
    return() => {
        isMounted = false;
        controller.abort();
    }
},[]);
  return (
    <>
    
    <div className="page">
    <NavBar/>
    <FileBrowse/>
    </div>
    </>
    
    

  )
}
