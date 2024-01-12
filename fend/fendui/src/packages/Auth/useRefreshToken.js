import React from 'react'
import useAuth from './useAuth'
import axios from '../../api/axios/axios';
export const UseRefreshToken = () => {
  const {auth, setAuth} = useAuth();
  const refresh = async () =>{
    const res = await axios.post('/auth/jwt/refresh', JSON.stringify({refresh: auth?.refreshToken}),{
      headers:{"Content-Type": "application/json"}
  });
    setAuth(prev =>{
      console.log(JSON.stringify(prev));
      console.log(res.access);
      return{...prev, accessToken: res.access};
    })
    return res.access;
  }

  return (
    refresh
  );
}
