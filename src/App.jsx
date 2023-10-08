import {  Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import './App.css'

function App() {


  return (
 <Container
 maxWidth='xl'
 
 >
  <Outlet/>
 </Container>
  )
}

export default App
