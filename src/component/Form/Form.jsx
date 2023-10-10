import {Box, TextField, Typography, IconButton} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Postulantes from './Postulantes/Postulantes';
import { useState } from 'react';
import { updateForm } from '../../redux/slice';
export default function Form (){
    //  constantes
    const dispatch = useDispatch();
    const {form} = useSelector((state)=>{ return state.data})
    const [isOpen,setOpen] = useState(false)
    //functions
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleChange = (e)=>{
        const { value, id } = e.target;
        dispatch(updateForm({...form,[id]:value}))
    }
    return (<Box sx={{width:'50%', marginTop:'30px'}}>

        <TextField
        id='email'
        type='email'
        label='Correo Electrónico'
        value={ form.email || ''}
        onChange={handleChange}
        fullWidth
        required
        
        />

        <Box sx={{display:'flex',alignItems:'center'}}>
        <Typography variant='body2' sx={{marginRight:'10px'}}>Agregar un Postulante</Typography>
            <IconButton onClick={handleOpen}>
                <PersonAddIcon color='primary'/>
            </IconButton>
        </Box>
      
        <Postulantes isOpen={isOpen} handleClose={handleClose}/>
    </Box>)
}