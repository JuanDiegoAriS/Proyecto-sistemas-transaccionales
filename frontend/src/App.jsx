import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom"


import Dashboard from "./pages/Dashboard"

import RegistrarProspecto from "./pages/RegistrarProspecto"

import Convertir from "./pages/ConvertirProspecto"

import Crear from "./pages/CrearPropuesta"

import Aprobar from "./pages/AprobarPropuesta"

import Interaccion from "./pages/RegistrarInteraccion"

import Metricas from "./pages/Metricas"



function App(){


return(

<BrowserRouter>


<Routes>


<Route path="/" element={<Dashboard/>}/>

<Route path="/prospecto" element={<RegistrarProspecto/>}/>

<Route path="/convertir" element={<Convertir/>}/>

<Route path="/propuesta" element={<Crear/>}/>

<Route path="/aprobar" element={<Aprobar/>}/>

<Route path="/interaccion" element={<Interaccion/>}/>

<Route path="/metricas" element={<Metricas/>}/>


</Routes>


</BrowserRouter>

)



}


export default App