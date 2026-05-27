import {

useEffect,

useState

}

from "react";


import api from "../api";


import Tabla

from "../components/Tabla";



export default function Clientes(){


const[

datos,

setDatos

]=

useState([])



useEffect(

()=>{


api.get(

"/clientes"

)

.then(

r=>

setDatos(

r.data

)

)


},

[]

)



return(

<Tabla


titulo="Clientes"


datos={datos}



columnas={[

"clienteID",

"nombres",

"email"

]}


/>

)


}