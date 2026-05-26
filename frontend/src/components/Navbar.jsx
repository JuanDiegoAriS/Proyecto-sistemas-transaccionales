import {

Link

}

from "react-router-dom";



export default function Navbar(){


return(

<div className="navbar">


<h1 className="logo">

CRM

</h1>



<Link to="/">

📊 Dashboard

</Link>



<Link to="/clientes">

👥 Clientes

</Link>



<Link to="/prospectos">

🎯 Prospectos

</Link>



<Link to="/propuestas">

📄 Propuestas

</Link>



<Link to="/ventas">

💰 Ventas

</Link>



<Link to="/alertas">

🚨 Alertas

</Link>



<Link to="/metricas">

📈 Métricas

</Link>



<Link to="/registrar">

➕ Registrar

</Link>



<Link to="/crear">

📝 Crear Propuesta

</Link>



</div>

)



}