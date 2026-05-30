import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function CrearPropuesta() {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState([]);

    const [vendedores, setVendedores] = useState([]);

    const [clienteID, setClienteID] = useState("");

    const [vendedorID, setVendedorID] = useState("");

    const [monto, setMonto] = useState("");

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


    const crear = async () => {

        if (

            !clienteID ||

            !vendedorID ||

            !monto

        ) {

            alert(
                "Complete todos los campos"
            );

            return;
        }

        try {

            setLoading(true);

            await api.post(

                "/crearPropuesta",

                {

                    clienteID: parseInt(
                        clienteID
                    ),

                    vendedorID: parseInt(
                        vendedorID
                    ),

                    monto: parseFloat(
                        monto
                    )

                }

            );

            alert(
                "Propuesta creada correctamente"
            );

            navigate(
                "/dashboard"
            );

        }

        catch (error) {

            console.error(error);

            alert(
                "Error creando propuesta"
            );

        }

        finally {

            setLoading(false);

        }

    };


    return (

        <div
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "30px"
            }}
        >

            <h1>

                Crear Propuesta

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

                            {vendedor.nombres}
                            {" "}
                            {vendedor.apellidos}
                            {" - "}
                            {vendedor.rol}

                        </option>

                    ))

                }

            </select>

            <br />
            <br />

            <label>

                Monto

            </label>

            <br />

            <input

                type="number"

                value={monto}

                onChange={(e) =>
                    setMonto(
                        e.target.value
                    )
                }

                placeholder="Ingrese monto"

                style={{
                    width: "100%",
                    padding: "10px"
                }}

            />

            <br />
            <br />

            <button

                onClick={crear}

                disabled={loading}

                style={{
                    width: "100%",
                    padding: "12px"
                }}

            >

                {

                    loading

                        ? "Creando..."

                        : "Crear Propuesta"

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
                    width: "100%",
                    padding: "12px"
                }}

            >

                Volver

            </button>

        </div>

    );

}