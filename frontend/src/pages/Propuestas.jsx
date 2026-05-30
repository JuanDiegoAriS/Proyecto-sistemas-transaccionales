import {
    useEffect,
    useState
} from "react";

import api from "../api";
import Tabla from "../components/Tabla";

export default function Propuestas() {

    const [datos, setDatos] = useState([]);

    const cargar = () => {

        api.get("/propuestas")
            .then(r => setDatos(r.data));

    };

    useEffect(() => {

        cargar();

    }, []);

    const aprobar = async (id) => {

        await api.post(
            `/aprobarPropuesta/${id}`
        );

        cargar();

    };

    const rechazar = async (id) => {

        await api.post(
            `/rechazarPropuesta/${id}`
        );

        cargar();

    };

    return (

        <Tabla

            titulo="Propuestas"

            datos={datos}

            columnas={[
                "propuestaID",
                "clienteID",
                "monto",
                "estado"
            ]}

            acciones={(fila) => (

                fila.estado === "Pendiente" ? (

                    <>

                        <button
                            onClick={() =>
                                aprobar(
                                    fila.propuestaID
                                )
                            }
                        >
                            Aprobar
                        </button>

                        {" "}

                        <button
                            onClick={() =>
                                rechazar(
                                    fila.propuestaID
                                )
                            }
                        >
                            Rechazar
                        </button>

                    </>

                ) : null

            )}

        />

    );

}