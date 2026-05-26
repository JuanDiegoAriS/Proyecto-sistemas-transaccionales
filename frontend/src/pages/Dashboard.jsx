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

]=

useState([])



const[

ventas,

setVentas

]=

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



api.get(

"/ventas"

)

.then(

r=>

setVentas(

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

valor={

clientes.length

}

/>



<Card

titulo="Ventas"

valor={

ventas.length

}

/>



<Card

titulo="Prospectos"

valor="24"

/>



<Card

titulo="Conversion"

valor="60%"

/>



</div>



</>

)


}