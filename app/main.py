from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware


from app.routes.clientes import router as clientes
from app.routes.prospectos import router as prospectos
from app.routes.propuestas import router as propuestas
from app.routes.ventas import router as ventas
from app.routes.alertas import router as alertas
from app.routes.interacciones import router as interacciones

from app.routes.transacciones import router as transacciones
from app.routes.metricas import router as metricas



app=FastAPI(

title="API Zimbra",

version="1.0"

)



app.add_middleware(

CORSMiddleware,

allow_origins=["*"],

allow_methods=["*"],

allow_headers=["*"]

)



app.include_router(clientes)

app.include_router(prospectos)

app.include_router(propuestas)

app.include_router(ventas)

app.include_router(alertas)

app.include_router(interacciones)

app.include_router(transacciones)

app.include_router(metricas)



@app.get("/")

def inicio():

    return {

        "mensaje":

        "API Zimbra funcionando"

    }