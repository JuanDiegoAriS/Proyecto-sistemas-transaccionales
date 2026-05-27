import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";


import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import CambiarPassword from "./pages/CambiarPassword";

import RutaProtegida from "./components/RutaProtegida";


// =====================================
// PAGINAS
// =====================================

import Clientes from "./pages/Clientes";

import Prospectos from "./pages/Prospectos";

import Propuestas from "./pages/Propuestas";

import Ventas from "./pages/Ventas";

import Alertas from "./pages/Alertas";

import Metricas from "./pages/Metricas";

import RegistrarProspecto from "./pages/RegistrarProspecto";

import CrearPropuesta from "./pages/CrearPropuesta";



function App(){

return(

<BrowserRouter>

<Routes>


{/* ===================================== */}
{/* LOGIN */}
{/* ===================================== */}

<Route

path="/"

element={<Login/>}

/>


{/* ===================================== */}
{/* CAMBIAR PASSWORD */}
{/* ===================================== */}

<Route

path="/cambiar-password"

element={

<RutaProtegida>

<CambiarPassword/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* DASHBOARD */}
{/* ===================================== */}

<Route

path="/dashboard"

element={

<RutaProtegida>

<Dashboard/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* CLIENTES */}
{/* ===================================== */}

<Route

path="/clientes"

element={

<RutaProtegida>

<Clientes/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* PROSPECTOS */}
{/* ===================================== */}

<Route

path="/prospectos"

element={

<RutaProtegida>

<Prospectos/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* PROPUESTAS */}
{/* ===================================== */}

<Route

path="/propuestas"

element={

<RutaProtegida>

<Propuestas/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* VENTAS */}
{/* ===================================== */}

<Route

path="/ventas"

element={

<RutaProtegida>

<Ventas/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* ALERTAS */}
{/* ===================================== */}

<Route

path="/alertas"

element={

<RutaProtegida>

<Alertas/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* METRICAS */}
{/* ===================================== */}

<Route

path="/metricas"

element={

<RutaProtegida>

<Metricas/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* REGISTRAR PROSPECTO */}
{/* ===================================== */}

<Route

path="/registrar"

element={

<RutaProtegida>

<RegistrarProspecto/>

</RutaProtegida>

}

/>


{/* ===================================== */}
{/* CREAR PROPUESTA */}
{/* ===================================== */}

<Route

path="/crear-propuesta"

element={

<RutaProtegida>

<CrearPropuesta/>

</RutaProtegida>

}

/>


</Routes>

</BrowserRouter>

);

}


export default App;