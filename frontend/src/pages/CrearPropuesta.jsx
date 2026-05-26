import api

from "../services/api";


function CrearPropuesta(){


const enviar=

async()=>{


await api.post(

"/crearPropuesta",

{

clienteID:1,

vendedorID:1,

monto:5000

}


)


alert(

"Propuesta creada"

)


}



return(

<>


<h1>

Nueva propuesta

</h1>



<button

onClick={

enviar

}

>

Crear

</button>


</>

)


}



export default CrearPropuesta;