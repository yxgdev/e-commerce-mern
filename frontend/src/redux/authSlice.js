import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { resourceUsage } from "process";

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


const authSlice = createSlice({
  name:"auth",
  initialState:{
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:null,
    },
    reducers:{
      userLoading:(state,action)=>{
        state.isLoading = true;
      },
      userLoaded:(state,action)=>{
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      },
      loginSuccess:(state,action)=>{
        localStorage.setItem('token',action.payload.token)
        state.isAuthenticated = true;
        state.isLoading = false;
      
      },
      registerSuccess:(state,action)=>{
        localStorage.setItem('token',action.payload.token)
        state.isAuthenticated = true;
        state.isLoading = false;
      
      },
      authError:(state,action)=>{
        localStorage.removeItem('token')
        state.token = null;
        state.user = null,
        state.isAuthenticated=null
        state.isLoading=false
      },
    }
})
