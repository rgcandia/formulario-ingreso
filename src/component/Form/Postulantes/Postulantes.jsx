import React from 'react'
import { Dialog , Slide ,AppBar, Toolbar, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Form from './FormPostulantes/Form.jsx';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Postulantes ({isOpen,handleClose}){
  
      //function
      const handlerExit = ()=>{
        handleClose()   
        
     }
    return (<Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
    >
<AppBar  sx={{ position: 'relative' }}>
    <Toolbar>
        <IconButton
         edge="start"
         color="inherit"
         onClick={handlerExit}
         aria-label="close"
        >
            <CloseIcon/>
        </IconButton>
    </Toolbar>
</AppBar>

<Form/>
    </Dialog>)
}