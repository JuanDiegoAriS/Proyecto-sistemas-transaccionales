import {

useState

}

from "react";


import api

from "../api/api";



export default function Propuesta(){


const[

cliente,

setCliente

]=

useState();


const[

monto,

setMonto

]=

useState();



const crear=

async()=>{


await api.post(

"/crearPropuesta",

{

clienteID:

cliente,



vendedorID:

1,



monto:

monto

}

)


}



return(

<>


<input

placeholder="Cliente"

onChange={

e=>

setCliente(

e.target.value

)

}


/>



<input

placeholder="Monto"

onChange={

e=>

setMonto(

e.target.value

)

}


/>



<button

onClick={crear}

>

Crear

</button>



</>

)


}