import { useState } from "react";

import api from "../api";

import { useNavigate } from "react-router-dom";


function Login(){

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const navigate=useNavigate();


    const iniciarSesion=async()=>{

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


            if(

                respuesta.data.primerLogin

            ){

                navigate(

                    "/cambiar-password"

                );

            }

            else{

                navigate(

                    "/dashboard"

                );

            }

        }

        catch(error){

            console.log(error);

            alert(

                "Error login"

            );

        }

    };


    return(

        <div>

            <h1>

                Login

            </h1>


            <input

                type="email"

                placeholder="Correo"

                onChange={

                    e=>

                    setEmail(

                        e.target.value

                    )

                }

            />


            <br/>
            <br/>


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


            <br/>
            <br/>


            <button

                onClick={

                    iniciarSesion

                }

            >

                Entrar

            </button>

        </div>

    );

}


export default Login;