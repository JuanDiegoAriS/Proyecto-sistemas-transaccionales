from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Rutas consultas
from app.routes.clientes import router as clientes
from app.routes.prospectos import router as prospectos
from app.routes.propuestas import router as propuestas
from app.routes.ventas import router as ventas
from app.routes.alertas import router as alertas
from app.routes.interacciones import router as interacciones


# Procedimientos
from app.routes.transacciones import router as transacciones


# UDF
from app.routes.metricas import router as metricas



app = FastAPI(

    title="CRM Zimbra",

    version="1.0"

)



app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)



###################################
# CONSULTAS
###################################

app.include_router(clientes)

app.include_router(prospectos)

app.include_router(propuestas)

app.include_router(ventas)

app.include_router(alertas)

app.include_router(interacciones)



###################################
# PROCEDIMIENTOS
###################################

app.include_router(

    transacciones

)



###################################
# UDF
###################################

app.include_router(

    metricas

)



@app.get("/")

def inicio():

    return {

        "mensaje":

        "API CRM funcionando"

    }