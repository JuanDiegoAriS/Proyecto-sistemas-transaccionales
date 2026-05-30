import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function RegistrarProspecto() {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState([]);

    const [vendedores, setVendedores] = useState([]);

    const [clienteID, setClienteID] = useState("");

    const [vendedorID, setVendedorID] = useState("");

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        cargarDatos();

    }, []);


    const cargarDatos = async () => {

        try {

            const clientesRes = await api.get(
                "/clientes"
            );

            const vendedoresRes = await api.get(
                "/vendedores"
            );

            setClientes(
                clientesRes.data
            );

            setVendedores(
                vendedoresRes.data
            );

        }

        catch (error) {

            console.error(error);

            alert(
                "Error cargando datos"
            );

        }

    };


    const registrar = async () => {

        if (!clienteID || !vendedorID) {

            alert(
                "Seleccione cliente y vendedor"
            );

            return;
        }

        try {

            setLoading(true);

            await api.post(

                "/registrarProspecto",

                {

                    clienteID: parseInt(
                        clienteID
                    ),

                    vendedorID: parseInt(
                        vendedorID
                    )

                }

            );

            alert(
                "Prospecto registrado correctamente"
            );

            navigate(
                "/dashboard"
            );

        }

        catch (error) {

            console.error(error);

            alert(
                "Error registrando prospecto"
            );

        }

        finally {

            setLoading(false);

        }

    };


    return (

        <div
            style={{
                padding: "30px",
                maxWidth: "600px",
                margin: "0 auto"
            }}
        >

            <h1>

                Registrar Prospecto

            </h1>

            <hr />

            <br />

            <label>

                Cliente

            </label>

            <br />

            <select

                value={clienteID}

                onChange={(e) =>
                    setClienteID(
                        e.target.value
                    )
                }

                style={{
                    width: "100%",
                    padding: "10px"
                }}

            >

                <option value="">

                    Seleccione un cliente

                </option>

                {

                    clientes.map(cliente => (

                        <option

                            key={cliente.clienteID}

                            value={cliente.clienteID}

                        >

                            {cliente.nombres} {cliente.apellidos}

                        </option>

                    ))

                }

            </select>

            <br />
            <br />

            <label>

                Vendedor

            </label>

            <br />

            <select

                value={vendedorID}

                onChange={(e) =>
                    setVendedorID(
                        e.target.value
                    )
                }

                style={{
                    width: "100%",
                    padding: "10px"
                }}

            >

                <option value="">

                    Seleccione un vendedor

                </option>

                {

                    vendedores.map(vendedor => (

                        <option

                            key={vendedor.vendedorID}

                            value={vendedor.vendedorID}

                        >

                            {vendedor.nombres} {vendedor.apellidos}
                            {" - "}
                            {vendedor.rol}

                        </option>

                    ))

                }

            </select>

            <br />
            <br />

            <button

                onClick={registrar}

                disabled={loading}

                style={{

                    padding: "12px",

                    width: "100%",

                    cursor: "pointer"

                }}

            >

                {

                    loading

                        ? "Registrando..."

                        : "Registrar Prospecto"

                }

            </button>

            <br />
            <br />

            <button

                onClick={() =>
                    navigate(
                        "/dashboard"
                    )
                }

                style={{

                    padding: "12px",

                    width: "100%"

                }}

            >

                Volver

            </button>

        </div>

    );

}