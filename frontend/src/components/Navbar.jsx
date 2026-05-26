import {Link}

from "react-router-dom";


export default function Navbar(){


return(

<nav className="navbar">


<Link to="/">Dashboard</Link>


<Link to="/clientes">

Clientes

</Link>


<Link to="/prospectos">

Prospectos

</Link>


<Link to="/propuestas">

Propuestas

</Link>


<Link to="/ventas">

Ventas

</Link>


<Link to="/alertas">

Alertas

</Link>


<Link to="/metricas">

Metricas

</Link>



</nav>

)


}