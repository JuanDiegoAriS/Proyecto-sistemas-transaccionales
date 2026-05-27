import {

useEffect,

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

useState();



useEffect(

()=>{


api.get(

"/score/ALTO"

)

.then(

r=>

setScore(

r.data.score

)

)


},

[]

)



return(

<>


<h1>

Metricas

</h1>


<h2>

Score:

{score}

</h2>



</>

)


}