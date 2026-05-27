import {

useState

}

from "react";


import api

from "../api";



export default function Metricas(){


const[

score,

setScore

]=

useState()



const calcular=

async()=>{


const r=

await api.get(

"/score/ALTO"

)



setScore(

r.data.score

)

}



return(

<>


<button

onClick={calcular}

>

Calcular Score

</button>



<h1>

{score}

</h1>



</>

)


}