import { Accordion , AccordionSummary,AccordionDetails , Box, Typography,IconButton} from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { eliminarPostulante } from "../../../redux/slice";
export default function Applicant (){
    const {postulantes} = useSelector(state=>state.data.form)
    const dispatch =  useDispatch();
    const handleDelete = (index)=>{
       dispatch( eliminarPostulante(index))
       console.log(index)
    }
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
            {e.fechaNacimiento && (
  <Typography variant="body2">Fecha de nacimiento: {e.fechaNacimiento}</Typography>
)}

{e.nivel && (
  <Typography variant="body2">Nivel a ingresar: {e.nivel}</Typography>
)}

{e.colegioAnterior && (
  <Typography variant="body2">Colegio anterior: {e.colegioAnterior}</Typography>
)}

{e.nombreCompletoPadre1 && (
  <Typography variant="body2">Nombre completo de Tutor 1: {e.nombreCompletoPadre1}</Typography>
)}

{e.celularPadre1 && (
  <Typography variant="body2">Celular de contacto de Tutor 1: {e.celularPadre1}</Typography>
)}

{e.nombreCompletoPadre2 && (
  <Typography variant="body2">Nombre Completo Tutor 2: {e.nombreCompletoPadre2}</Typography>
)}

{e.celularPadre2 && (
  <Typography variant="body2">Celular de contacto de Tutor 2: {e.celularPadre2}</Typography>
)}

            </AccordionDetails>
            <Box>  <IconButton color='primary' onClick={()=>{handleDelete(index)}}>
                <DeleteForeverIcon/>
            </IconButton>
            </Box>
            </Accordion>
            )
        })}
       
    </Box>)
}
