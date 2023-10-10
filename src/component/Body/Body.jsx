import { Box, Typography } from "@mui/material";
import Form from '../Form/Form.jsx'
import styles from './Body.module.css'
export default function Body (){
return (<Box className={styles.body}>
    <Box className={styles.title}>
        <Typography  variant='h6'>SOLICITUD DE ADMISION</Typography>
        <Box sx={{marginTop:'20px'}}>
        <Typography  variant='body2'>Muchas gracias por su contacto.</Typography>
        <Typography  variant='body2'>Por favor completar con los datos solicitados.</Typography>
        <Typography  variant='body2'>Nos comunicaremos a la brevedad.</Typography>
        </Box>
    </Box>
    <Form/>
</Box>)
}