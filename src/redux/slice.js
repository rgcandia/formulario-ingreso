import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 
  form:{
    email:'',
    postulantes:[]
  },
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    updateForm:(state,action)=>{
    state.form = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateForm } = stateSlice.actions
export default stateSlice.reducer