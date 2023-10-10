import { Box, Typography, TextField, MenuItem } from "@mui/material" 
import { useState } from "react";
import { useDispatch} from "react-redux";
import Postulantes from "../Postulantes";
import styles from './Form.module.css'
export default function Form (){
    //variables
    const [postulantes,setPostutalntes] = useState({
        nombreCompleto:null,
        fechaNacimiento:null, 
        nivel:null,   
    })
    const dispatch = useDispatch();
    
    //function
    const handleChange = (e) => {
        const { value, id } = e.target;
       setPostutalntes({...postulantes,[id]:value})
      };

      const handleChangeSelect = (e)=>{
        const {value,name} = e.target;
        setPostutalntes({...postulantes,[name]:value})
      }
    return (<Box className={styles.form}>
        <Typography variant="h6" textAlign='center'>DATOS DEL POSTULANTE</Typography>
        <Box className={styles.items}>
        <TextField
     id='nombreCompleto'
     type='text'
     label='Nombre y Apellido'
     value={postulantes.nombreCompleto||""}
     onChange={handleChange}
     fullWidth
     required
     />
<Box>
 <Typography>Fecha de nacimiento</Typography>   
<TextField
     id='fechaNacimiento'
     type='date'
     value={ postulantes.fechaNacimiento || ""}
     onChange={handleChange}
     fullWidth
     required
     />
</Box>

<TextField
        select
        name="nivel"
        label='Nivel a ingresar'
        onChange={handleChangeSelect}
        value={postulantes.nivel || ''}
        fullWidth 
        defaultValue=""
        required
        
      >
        <MenuItem value="Kinder1">Kinder 1</MenuItem>
        <MenuItem value="Kinder2">Kinder 2</MenuItem>
        <MenuItem value="Kinder3">Kinder 3</MenuItem>
        <MenuItem value="Kinder4">Kinder 4</MenuItem>
        <MenuItem value="Kinder5">Kinder 5</MenuItem>
        <MenuItem value="Primaria1">Primaria 1</MenuItem>
        <MenuItem value="Primaria2">Primaria 2</MenuItem>
        <MenuItem value="Primaria3">Primaria 3</MenuItem>
        <MenuItem value="Primaria4">Primaria 4</MenuItem>
        <MenuItem value="Primaria5">Primaria 5</MenuItem>
        <MenuItem value="Primaria6">Primaria 6</MenuItem>
        <MenuItem value="Secundaria1">Secundaria 1</MenuItem>
        <MenuItem value="Secundaria2">Secundaria 2</MenuItem>
        <MenuItem value="Secundaria3">Secundaria 3</MenuItem>
        <MenuItem value="Secundaria4">Secundaria 4</MenuItem>
        <MenuItem value="Secundaria5">Secundaria 5</MenuItem>
        <MenuItem value="Secundaria6">Secundaria 6</MenuItem>
        
      </TextField>

        </Box>
        

        </Box>)
}