import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated : false,
    token : null,
    user : null,
  
}

const auth = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        SET_AUTHENTICATION : ( state  ,  {payload}) => {
            state.authenticated = payload
        },
        SET_TOKEN : ( state  ,  {payload}) => {
            state.token = payload
        },
        SET_USER : ( state  ,  {payload}) => {
            state.user = payload
        },
       
        RESET_STATE : (state , _) => {
            state.authenticated = false
            state.token = null
            state.user = null
     
        }
    }
})

export const { SET_AUTHENTICATION , SET_TOKEN , SET_USER  , RESET_STATE } = auth.actions
export default auth.reducer