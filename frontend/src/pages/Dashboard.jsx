import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../api";

import { Pie, Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

export default function Dashboard() {

    const navigate = useNavigate();

    const rol = localStorage.getItem("rol");

    const [metricas, setMetricas] = useState({
        clientes: 0,
        prospectos: 0,
        propuestas: 0,
        ventas: 0,
        ingresos: 0
    });

    const [graficas, setGraficas] = useState({
        propuestas: [],
        ventas: []
    });

    useEffect(() => {

        api.get("/dashboard")
            .then(r => setMetricas(r.data))
            .catch(console.error);

        api.get("/graficas")
            .then(r => setGraficas(r.data))
            .catch(console.error);

    }, []);

    const cerrarSesion = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div
            style={{
                padding: "40px",
                fontFamily: "Arial",
                color: "white",
                background: "#0f172a",
                minHeight: "100vh"
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    fontSize: "60px"
                }}
            >
                CRM
            </h1>

            <hr />

            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Dashboard Zimbra
            </h1>

            <h2
                style={{
                    textAlign: "center"
                }}
            >
                Bienvenido
            </h2>

            <h3
                style={{
                    textAlign: "center"
                }}
            >
                Rol: {rol}
            </h3>

            <br />

            {/* KPI */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                    marginBottom: "40px"
                }}
            >

                <div
                    style={{
                        background: "#1e293b",
                        padding: "20px",
                        borderRadius: "12px"
                    }}
                >
                    <h3>Clientes</h3>
                    <h1>{metricas.clientes}</h1>
                </div>

                <div
                    style={{
                        background: "#1e293b",
                        padding: "20px",
                        borderRadius: "12px"
                    }}
                >
                    <h3>Prospectos</h3>
                    <h1>{metricas.prospectos}</h1>
                </div>

                <div
                    style={{
                        background: "#1e293b",
                        padding: "20px",
                        borderRadius: "12px"
                    }}
                >
                    <h3>Propuestas</h3>
                    <h1>{metricas.propuestas}</h1>
                </div>

                <div
                    style={{
                        background: "#1e293b",
                        padding: "20px",
                        borderRadius: "12px"
                    }}
                >
                    <h3>Ventas</h3>
                    <h1>{metricas.ventas}</h1>
                </div>

                <div
                    style={{
                        background: "#1e293b",
                        padding: "20px",
                        borderRadius: "12px"
                    }}
                >
                    <h3>Ingresos</h3>
                    <h1>${metricas.ingresos}</h1>
                </div>

            </div>

            {/* PIE CHART */}

            <div
                style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "40px"
                }}
            >

                <h2
                    style={{
                        textAlign: "center"
                    }}
                >
                    Estado de Propuestas
                </h2>

                <div
                    style={{
                        maxWidth: "500px",
                        margin: "0 auto"
                    }}
                >

                    <Pie
                        data={{
                            labels:
                                (graficas.propuestas || []).map(
                                    p => p.estado
                                ),

                            datasets: [
                                {
                                    label: "Propuestas",

                                    data:
                                        (graficas.propuestas || []).map(
                                            p => p.cantidad
                                        ),

                                    backgroundColor: [
                                        "#22c55e",
                                        "#f59e0b",
                                        "#ef4444",
                                        "#3b82f6",
                                        "#8b5cf6"
                                    ],

                                    borderColor: "#ffffff",

                                    borderWidth: 2
                                }
                            ]
                        }}
                    />

                </div>

            </div>

            {/* BAR CHART */}

            <div
                style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "40px"
                }}
            >

                <h2
                    style={{
                        textAlign: "center"
                    }}
                >
                    Ventas por Mes
                </h2>

                <Bar
                    data={{
                        labels:
                            (graficas.ventas || []).map(v => {

                                const meses = [
                                    "Ene",
                                    "Feb",
                                    "Mar",
                                    "Abr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Ago",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dic"
                                ];

                                return meses[v.mes - 1];

                            }),

                        datasets: [
                            {
                                label: "Ventas",

                                data:
                                    (graficas.ventas || []).map(
                                        v => v.cantidad
                                    ),

                                backgroundColor: "#3b82f6"
                            }
                        ]
                    }}
                />

            </div>

            {/* ADMIN */}

            {rol === "admin" && (

                <div>

                    <h2>Panel Administrador</h2>

                    <button onClick={() => navigate("/clientes")}>Clientes</button>
                    <br /><br />

                    <button onClick={() => navigate("/prospectos")}>Prospectos</button>
                    <br /><br />

                    <button onClick={() => navigate("/propuestas")}>Propuestas</button>
                    <br /><br />

                    <button onClick={() => navigate("/ventas")}>Ventas</button>
                    <br /><br />

                    <button onClick={() => navigate("/alertas")}>Alertas</button>
                    <br /><br />

                    <button onClick={() => navigate("/metricas")}>Métricas</button>
                    <br /><br />
                    
                    <button onClick={()=>navigate("/registrar-cliente")}>Registrar Cliente</button>
                    <br/><br/>

                    <button onClick={() => navigate("/registrar")}>Registrar Prospecto</button>
                    <br /><br />

                    <button onClick={() => navigate("/crear-propuesta")}>Crear Propuesta</button>

                </div>

            )}

            {/* MARKETING */}

            {rol === "marketing" && (

                <div>

                    <h2>Panel Marketing</h2>

                    <button onClick={() => navigate("/prospectos")}>Prospectos</button>
                    <br /><br />

                    <button onClick={() => navigate("/metricas")}>Métricas</button>
                    <br /><br />

                    <button onClick={() => navigate("/alertas")}>Alertas</button>

                </div>

            )}

            {/* VENDEDOR */}

            {rol === "vendedor" && (

                <div>

                    <h2>Panel Vendedor</h2>

                    <button onClick={() => navigate("/registrar")}>Registrar Prospecto</button>
                    <br /><br />

                    <button onClick={() => navigate("/crear-propuesta")}>Crear Propuesta</button>
                    <br /><br />

                    <button onClick={() => navigate("/ventas")}>Ventas</button>

                </div>

            )}

            <br />
            <br />

            <button
                onClick={cerrarSesion}
                style={{
                    background: "red",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Cerrar Sesión
            </button>

        </div>
        

    );


}