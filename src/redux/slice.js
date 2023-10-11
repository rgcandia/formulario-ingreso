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
    },
    eliminarPostulante:(state,action)=>{
      const index = action.payload; // Índice del elemento a eliminar
      state.form.postulantes = [
        ...state.form.postulantes.slice(0, index), // Elementos antes del índice
        ...state.form.postulantes.slice(index + 1), // Elementos después del índice
      ];
    
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { updateForm ,setPostulantes,eliminarPostulante} = stateSlice.actions
export default stateSlice.reducer