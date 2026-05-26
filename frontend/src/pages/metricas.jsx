import {

useEffect,

useState

}

from "react";


import api from "../api/api"



export default function Metricas(){


const[

score,

setScore

]

=

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

<div>

<h2>

Score:

{score}

</h2>

</div>

)

}