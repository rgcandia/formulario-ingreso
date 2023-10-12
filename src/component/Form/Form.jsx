import {Box, TextField, Typography, IconButton, Button} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Postulantes from './Postulantes/Postulantes';
import { useState } from 'react';
import { resetForm, updateForm } from '../../redux/slice';
import Applicant from './Applicant/Applicant';
import styles from './Form.module.css'
import { alertSendFormOk } from '../../alert';
import MiIcono from '../../images/checkform.png'
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
    const handleSend = ()=>{
        dispatch(resetForm()) ;
        alertSendFormOk();
    }
    return (<Box className={styles.form}>
      <Postulantes isOpen={isOpen} handleClose={handleClose} />
        <Box className={styles.titleForm}>
        <Typography variant='h6'  sx={{marginBottom:'10px',marginTop:'10px',textAlign:'center'}} >Formulario</Typography>
        <Box className={styles.iconoForm}><img alt='icono de formulario' src={MiIcono}/></Box>
        </Box>
     <Box >
        
     <TextField
        id='email'
        type='email'
        label='Correo Electrónico'
        value={ form.email || ''}
        onChange={handleChange}
        fullWidth
        required
        
        />
        <Typography variant='body2' sx={{marginBottom:'10px',marginTop:'10px'}}>Ingresar tu correo electrónico</Typography>
     </Box>

        <Box className={styles.postulantes} sx={{display:'flex',alignItems:'center'}}>
        <Typography variant='body2' sx={{marginRight:'10px'}}>Agregar un Postulante</Typography>
            <IconButton onClick={handleOpen}>
                <PersonAddIcon color='primary'/>
            </IconButton>
        </Box>
       {form.postulantes.length > 0 && <Applicant/>}

       <Box className={styles.send} >
       <Button variant='outlined' onClick={handleSend} >Enviar</Button>
       </Box>
        
    </Box>)
}