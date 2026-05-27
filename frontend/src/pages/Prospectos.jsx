import {

useEffect,

useState

}

from "react";


import api

from "../api";


import Tabla

from "../components/Tabla";



export default function Prospectos(){


const[

datos,

setDatos

]

=

useState([])



useEffect(

()=>{


api.get(

"/prospectos"

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


titulo="Prospectos"


datos={datos}



columnas={[

"prospectoID",

"clienteID",

"estadoPrueba"

]}


/>

)


}