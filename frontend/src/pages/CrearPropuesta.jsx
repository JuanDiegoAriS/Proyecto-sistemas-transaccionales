import { useState } from "react";
import api from "../api";

export default function Propuesta() {

    const [cliente, setCliente] =
        useState("");

    const [monto, setMonto] =
        useState("");

    const crear = async () => {

        try {

            await api.post(
                "/crearPropuesta",
                {
                    clienteID:
                        parseInt(cliente),

                    vendedorID:
                        1,

                    monto:
                        parseFloat(monto)
                }
            );

            alert(
                "Propuesta creada"
            );

        }
        catch (error) {

            console.log(
                error.response?.data
            );

            alert(
                "Error"
            );
        }
    };

    return (

        <>

            <input
                type="number"
                placeholder="Cliente"
                onChange={
                    e =>
                    setCliente(
                        e.target.value
                    )
                }
            />

            <input
                type="number"
                placeholder="Monto"
                onChange={
                    e =>
                    setMonto(
                        e.target.value
                    )
                }
            />

            <button
                onClick={crear}
            >
                Crear
            </button>

        </>

    );

}