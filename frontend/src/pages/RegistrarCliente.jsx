import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function RegistrarCliente() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        nombres: "",

        apellidos: "",

        email: "",

        telefono: "",

        empresa: "",

        cargo: ""

    });

    const guardar = async () => {

        try {

            await api.post(

                "/clientes",

                form

            );

            alert(

                "Cliente registrado"

            );

            navigate(

                "/dashboard"

            );

        }

        catch(error){

            console.error(error);

            alert(

                "Error registrando cliente"

            );

        }

    };

    return (

        <div
            style={{
                maxWidth:"600px",
                margin:"auto",
                padding:"30px"
            }}
        >

            <h1>

                Registrar Cliente

            </h1>

            <input
                placeholder="Nombres"
                onChange={e=>
                    setForm({
                        ...form,
                        nombres:e.target.value
                    })
                }
            />

            <br/><br/>

            <input
                placeholder="Apellidos"
                onChange={e=>
                    setForm({
                        ...form,
                        apellidos:e.target.value
                    })
                }
            />

            <br/><br/>

            <input
                placeholder="Email"
                onChange={e=>
                    setForm({
                        ...form,
                        email:e.target.value
                    })
                }
            />

            <br/><br/>

            <input
                placeholder="Telefono"
                onChange={e=>
                    setForm({
                        ...form,
                        telefono:e.target.value
                    })
                }
            />

            <br/><br/>

            <input
                placeholder="Empresa"
                onChange={e=>
                    setForm({
                        ...form,
                        empresa:e.target.value
                    })
                }
            />

            <br/><br/>

            <input
                placeholder="Cargo"
                onChange={e=>
                    setForm({
                        ...form,
                        cargo:e.target.value
                    })
                }
            />

            <br/><br/>

            <button onClick={guardar}>

                Guardar Cliente

            </button>

        </div>

    );

}