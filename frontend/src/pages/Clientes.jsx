import {

useEffect,

useState

}

from "react";


import api

from "../api/api";


import Tabla

from "../components/Tabla";



export default function Clientes(){


const[

clientes,

setClientes

]

=

useState([])



useEffect(

()=>{


api.get(

"/clientes"

)

.then(

r=>

setClientes(

r.data

)

)


},

[]

)



return(


<Tabla


titulo="Clientes"


datos={clientes}



columnas={[

"clienteID",

"nombres",

"email",

"empresa"

]}


/>


)


}