import { useState } from "react";
import api from "../api";

export default function Registrar() {

    const [cliente, setCliente] = useState("");
    const [vendedor, setVendedor] = useState("");

    const guardar = async () => {

        try {

            await api.post(
                "/registrarProspecto",
                {
                    clienteID: parseInt(cliente),
                    vendedorID: parseInt(vendedor)
                }
            );

            alert("Prospecto registrado");

        } catch (error) {

            console.log(error.response?.data);

            alert(
                error.response?.data?.detail ||
                "Error al registrar"
            );
        }
    };

    return (

        <>
            <h1>Registrar Prospecto</h1>

            <input
                placeholder="Cliente ID"
                type="number"
                onChange={e =>
                    setCliente(
                        e.target.value
                    )
                }
            />

            <input
                placeholder="Vendedor ID"
                type="number"
                onChange={e =>
                    setVendedor(
                        e.target.value
                    )
                }
            />

            <button onClick={guardar}>
                Guardar
            </button>
        </>

    );

}