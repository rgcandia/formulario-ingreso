import { Accordion , AccordionSummary,AccordionDetails , Box, Typography,IconButton} from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from "react-redux"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";
export default function Applicant (){
    const {postulantes} = useSelector(state=>state.data.form)
    return (<Box>
        
        {postulantes.map((e,index)=>{
            return(
                <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={"panel"+index+"-content"}
                id={index}
                >
                 <Typography variant="body2">{e.nombreCompletoAlumno}</Typography>   
            </AccordionSummary>
            <AccordionDetails>
                <Typography  variant="body2">Fecha de nacimiento: {e.fechaNacimiento}</Typography>
                <Typography variant="body2">Nivel a ingresar: {e.nivel}</Typography>
                <Typography variant="body2">Colegio anterior: {e.colegioAnterior}</Typography>
                <Typography variant="body2"> </Typography>
                <Typography variant="body2"> </Typography>
                <Typography variant="body2"> </Typography>
                <Typography variant="body2"> </Typography>
            </AccordionDetails>
            <Box>  <IconButton color='primary'>
                <DeleteForeverIcon/>
            </IconButton></Box>
            </Accordion>
            )
        })}
       
    </Box>)
}
