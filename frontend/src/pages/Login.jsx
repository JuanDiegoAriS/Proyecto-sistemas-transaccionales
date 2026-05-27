import {

useState

}

from "react";

import api from "../api";

import {

useNavigate

}

from "react-router-dom";


export default function Login(){

const [

email,

setEmail

]

=

useState("");


const [

password,

setPassword

]

=

useState("");


const navigate=

useNavigate();



const entrar=

async()=>{


try{


const respuesta=

await api.post(

"/login",

{

email,

password

}

);



localStorage.setItem(

"token",

respuesta.data.token

);



localStorage.setItem(

"rol",

respuesta.data.rol

);



navigate(

"/dashboard"

);


}

catch{


alert(

"Credenciales incorrectas"

);

}


};



return(


<>

<h1>

Login

</h1>


<input

placeholder="Correo"

onChange={

e=>

setEmail(

e.target.value

)

}

/>



<input

type="password"

placeholder="Contraseña"

onChange={

e=>

setPassword(

e.target.value

)

}

/>



<button

onClick={entrar}

>

Entrar

</button>


</>


);


}