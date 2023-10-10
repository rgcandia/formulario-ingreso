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
    },
    setPostulantes:(state,action)=>{
      state.form.postulantes.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateForm ,setPostulantes} = stateSlice.actions
export default stateSlice.reducer