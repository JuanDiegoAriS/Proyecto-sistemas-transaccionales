export default function Tabla({

titulo,
datos,
columnas

}){


return(

<div className="tabla-container">


<h1>

{titulo}

</h1>



<table>


<thead>


<tr>


{

columnas.map(

col=>

<th key={col}>

{col}

</th>

)

}


</tr>


</thead>




<tbody>


{

datos.map(

(

fila,

i

)=>(


<tr key={i}>


{

columnas.map(

col=>

<td key={col}>

{

fila[col]

??

"-"

}

</td>

)

}



</tr>

)

)


}


</tbody>



</table>



</div>

)



}