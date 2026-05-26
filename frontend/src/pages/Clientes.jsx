import {

useEffect,

useState

}

from "react";


import api

from "../api/api";



export default function Clientes(){


const[

datos,

setDatos

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

setDatos(

r.data

)

)


},

[]

)



return(

<>


<h1>

Clientes

</h1>



<table>


<thead>

<tr>

<th>ID</th>

<th>Nombre</th>

<th>Email</th>

</tr>


</thead>



<tbody>


{

datos.map(

c=>

<tr>


<td>

{

c.clienteID

}

</td>


<td>

{

c.nombres

}

</td>


<td>

{

c.email

}

</td>



</tr>

)


}


</tbody>



</table>


</>

)


}