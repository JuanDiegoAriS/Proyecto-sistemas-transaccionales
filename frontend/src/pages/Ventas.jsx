import {

useEffect,

useState

}

from "react";


import api

from "../api/api";


import Tabla

from "../components/Tabla";



export default function Ventas(){


const[

datos,

setDatos

]

=

useState([])



useEffect(

()=>{


api.get(

"/ventas"

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


titulo="Ventas"


datos={datos}



columnas={[

"ventaID",

"propuestaID",

"fechaVenta"

]}


/>

)


}