import {

useState

}

from "react";


import api

from "../api/api";



export default function Registrar(){


const[

cliente,

setCliente

]=

useState();


const[

vendedor,

setVendedor

]=

useState();



const guardar=

async()=>{


await api.post(

"/registrarProspecto",

{

clienteID:

cliente,



vendedorID:

vendedor

}

)



alert(

"Guardado"

)


}



return(

<>


<h1>

Registrar Prospecto

</h1>



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

placeholder="Vendedor"

onChange={

e=>

setVendedor(

e.target.value

)

}

/>



<button onClick={guardar}>

Guardar

</button>



</>

)


}