import {useState}

from "react";


import api

from "../services/api";



function RegistrarCliente(){


const [

nombre,

setNombre

]

=

useState("");


const enviar=

async()=>{


await api.post(

"/registrarCliente",

{

nombres:nombre,

apellidos:"Perez",

email:

"correo@gmail.com",

telefono:

"300",

empresa:

"Empresa",

cargo:

"Gerente"

}


)


alert(

"Cliente registrado"

)


}



return(

<>


<h1>

Registrar Cliente

</h1>



<input

placeholder="Nombre"

onChange={

e=>

setNombre(

e.target.value

)

}

/>



<button

onClick={

enviar

}

>

Guardar

</button>



</>

)


}


export default RegistrarCliente;