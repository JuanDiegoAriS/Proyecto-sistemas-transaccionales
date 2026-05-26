import {

useEffect,

useState

}

from "react";


import api

from "../api/api";


import Card

from "../components/Card";



export default function Dashboard(){


const[

clientes,

setClientes

]

=

useState([]);


const[

prospectos,

setProspectos

]

=

useState([]);



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



api.get(

"/prospectos"

)

.then(

r=>

setProspectos(

r.data

)

)



},

[]

)



return(

<>


<h1>

Dashboard

</h1>


<div className="cards">


<Card

titulo="Clientes"

valor={clientes.length}

/>



<Card

titulo="Prospectos"

valor={prospectos.length}

/>



</div>


</>

)


}