import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";


import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";

import Clientes from "./pages/Clientes";

import Prospectos from "./pages/Prospectos";

import Propuestas from "./pages/Propuestas";

import Ventas from "./pages/Ventas";

import Alertas from "./pages/Alertas";

import Registrar from "./pages/RegistrarProspecto";

import Propuesta from "./pages/CrearPropuesta";

import Metricas from "./pages/Metricas";



function App(){


return(

<BrowserRouter>


<Navbar/>


<Routes>


<Route

path="/"

element={<Dashboard/>}

/>


<Route

path="/clientes"

element={<Clientes/>}

/>


<Route

path="/prospectos"

element={<Prospectos/>}

/>


<Route

path="/propuestas"

element={<Propuestas/>}

/>


<Route

path="/ventas"

element={<Ventas/>}

/>


<Route

path="/alertas"

element={<Alertas/>}

/>


<Route

path="/registrar"

element={<Registrar/>}

/>


<Route

path="/crear"

element={<Propuesta/>}

/>


<Route

path="/metricas"

element={<Metricas/>}

/>



</Routes>


</BrowserRouter>

)



}


export default App