import {

useEffect,

useState

}

from "react";


import api

from "../api";


import Tabla

from "../components/Tabla";



export default function Interacciones(){


const[

datos,

setDatos

]

=

useState([])



useEffect(

()=>{


api.get(

"/interacciones"

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


titulo="Interacciones"


datos={datos}



columnas={[

"clienteID",

"paginaVisitada",

"nivelInteres"

]}


/>

)


}