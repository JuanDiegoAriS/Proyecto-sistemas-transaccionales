export default function Tabla({

titulo,

datos,

columnas,

acciones

}){

return(

<div

style={{

maxWidth:"1200px",

margin:"0 auto",

padding:"20px"

}}

>

<h1

style={{

textAlign:"center",

marginBottom:"20px"

}}

>

{titulo}

</h1>


<table

style={{

width:"100%",

borderCollapse:"collapse",

textAlign:"center"

}}

>

<thead>

<tr>

{

columnas.map(

col=>

<th

key={col}

style={{

padding:"12px",

borderBottom:"1px solid #444"

}}

>

{col}

</th>

)

}


{

acciones &&

<th>

Acciones

</th>

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

<td

key={col}

style={{

padding:"10px"

}}

>

{

fila[col]

??

"-"

}

</td>

)

}


{

acciones &&

<td>

{

acciones(

fila

)

}

</td>

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