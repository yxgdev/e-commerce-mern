import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// actions
export const loadUser = async (dispatch, getState) => {
  dispatch(userLoading());

  try {
    
    const res = await axios.get("/api/user", tokenCofing(getState));


    dispatch(userLoaded(res.data))

  } catch (error) {
    console.log('loadUser error')
    
  }


};
// slice

export const register = async(dispatch,user)=>{
  
  const config = { headers:{
    'Content-Type': 'application/json'
  }}

  const body = JSON.stringify(user)

  try {
    
    const res = await axios.post ('/api/register',body,config)
    dispatch(registerSuccess(res.data))

  } catch (error) {
    console.log('register error')
    
  }


}



export const login = (dispatch,user)=>{
  const config = {
    headers:{
      'Content-Type':'application/json'
    }
  }

  const body = JSON.stringify(user)

  
  try {
    const res = await axios.post('/api/login',body,config)
    dispatch(loginSuccess(res.data))
    
  } catch (error) {
    console.log('login error')
    
  }
}
