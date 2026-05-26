import {

useEffect,

useState

}

from "react";


import api

from "../api/api";


import Tabla

from "../components/Tabla";



export default function Alertas(){


const[

datos,

setDatos

]

=

useState([])



useEffect(

()=>{


api.get(

"/alertas"

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


titulo="Alertas"


datos={datos}



columnas={[

"alertaID",

"clienteID",

"mensaje"

]}


/>

)


}