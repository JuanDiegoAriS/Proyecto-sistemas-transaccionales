import {

useState

}

from "react";

import api from "../api";

import {

useNavigate

}

from "react-router-dom";


export default function CambiarPassword(){

const [

password,

setPassword

]

=

useState("");


const navigate=

useNavigate();


const guardar=

async()=>{

const token=

localStorage.getItem(

"token"

);


const payload=

JSON.parse(

atob(

token.split(".")[1]

)

);


await api.post(

"/cambiar-password",

{

id:

payload.id,

password

}

);


alert(

"Contraseña actualizada"

);


navigate(

"/dashboard"

);

};


return(

<div>

<h1>

Cambiar contraseña

</h1>


<input

type="password"

placeholder="Nueva contraseña"

onChange={

e=>

setPassword(

e.target.value

)

}

/>


<br/>
<br/>


<button

onClick={guardar}

>

Guardar

</button>

</div>

);

}