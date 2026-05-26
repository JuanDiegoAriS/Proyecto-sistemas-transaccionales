import {

useEffect,

useState

}

from "react";


import api

from "../api/api";

import Tabla

from "../components/Tabla";



export default function Propuestas(){


const[

datos,

setDatos

]

=

useState([])



useEffect(

()=>{


api.get(

"/propuestas"

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


titulo="Propuestas"



datos={datos}



columnas={[

"propuestaID",

"clienteID",

"monto",

"estado"

]}


/>

)


}