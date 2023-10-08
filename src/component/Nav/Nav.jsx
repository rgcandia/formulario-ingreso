import {AppBar,Toolbar,Box} from '@mui/material'
import logo from '../../images/encabezado-wellspring.png';
import styles from './Nav.module.css'
export default function Nav (){
    return <AppBar position="static">
        <Toolbar>
        <Box>
                  <a href="/">
                    <img
                    className={styles.logo}
                    src={logo}
                    alt={logo.substring(30)}
                    />
                    </a>
  </Box>
        </Toolbar>
    </AppBar>
}