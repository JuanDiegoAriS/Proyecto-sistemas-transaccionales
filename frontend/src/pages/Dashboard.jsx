import { useNavigate } from "react-router-dom";


export default function Dashboard(){

    const navigate = useNavigate();

    const rol = localStorage.getItem(
        "rol"
    );


    const cerrarSesion = ()=>{

        localStorage.clear();

        navigate("/");

    };


    return(

        <div
            style={{
                padding:"40px",
                fontFamily:"Arial",
                color:"white",
                background:"#0f172a",
                minHeight:"100vh"
            }}
        >

            {/* ================================= */}
            {/* TITULO */}
            {/* ================================= */}

            <h1
                style={{
                    textAlign:"center",
                    fontSize:"60px"
                }}
            >

                CRM

            </h1>


            <hr/>


            <h1
                style={{
                    textAlign:"center"
                }}
            >

                Dashboard Zimbra

            </h1>


            <h2
                style={{
                    textAlign:"center"
                }}
            >

                Bienvenido

            </h2>


            <h3
                style={{
                    textAlign:"center"
                }}
            >

                Rol:

                {rol}

            </h3>


            <br/>


            {/* ================================= */}
            {/* ADMIN */}
            {/* ================================= */}

            {
                rol==="admin" && (

                    <div>

                        <h2>

                            Panel Administrador

                        </h2>


                        <button

                            onClick={()=>

                                navigate(

                                    "/clientes"

                                )

                            }

                        >

                            Clientes

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/prospectos"

                                )

                            }

                        >

                            Prospectos

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/propuestas"

                                )

                            }

                        >

                            Propuestas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/ventas"

                                )

                            }

                        >

                            Ventas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/alertas"

                                )

                            }

                        >

                            Alertas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/metricas"

                                )

                            }

                        >

                            Métricas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/registrar"

                                )

                            }

                        >

                            Registrar Prospecto

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/crear-propuesta"

                                )

                            }

                        >

                            Crear Propuesta

                        </button>

                    </div>

                )
            }


            {/* ================================= */}
            {/* MARKETING */}
            {/* ================================= */}

            {
                rol==="marketing" && (

                    <div>

                        <h2>

                            Panel Marketing

                        </h2>


                        <button

                            onClick={()=>

                                navigate(

                                    "/prospectos"

                                )

                            }

                        >

                            Prospectos

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/metricas"

                                )

                            }

                        >

                            Métricas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/alertas"

                                )

                            }

                        >

                            Alertas

                        </button>

                    </div>

                )
            }


            {/* ================================= */}
            {/* VENDEDOR */}
            {/* ================================= */}

            {
                rol==="vendedor" && (

                    <div>

                        <h2>

                            Panel Vendedor

                        </h2>


                        <button

                            onClick={()=>

                                navigate(

                                    "/registrar"

                                )

                            }

                        >

                            Registrar Prospecto

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/crear-propuesta"

                                )

                            }

                        >

                            Crear Propuesta

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/ventas"

                                )

                            }

                        >

                            Ventas

                        </button>


                        <br/>
                        <br/>


                        <button

                            onClick={()=>

                                navigate(

                                    "/alertas"

                                )

                            }

                        >

                            Alertas

                        </button>

                    </div>

                )
            }


            <br/>
            <br/>


            {/* ================================= */}
            {/* LOGOUT */}
            {/* ================================= */}

            <button

                onClick={cerrarSesion}

                style={{

                    background:"red",

                    color:"white",

                    padding:"10px",

                    border:"none",

                    cursor:"pointer"

                }}

            >

                Cerrar Sesión

            </button>

        </div>

    );

}