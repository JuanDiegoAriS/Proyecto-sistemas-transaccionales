from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

# Rutas consultas
from app.routes.clientes import router as clientes
from app.routes.prospectos import router as prospectos
from app.routes.propuestas import router as propuestas
from app.routes.ventas import router as ventas
from app.routes.alertas import router as alertas
from app.routes.interacciones import router as interacciones
from app.routes.login import router as login_router

# Procedimientos
from app.routes.transacciones import router as transacciones


# UDF
from app.routes.metricas import router as metricas

app = FastAPI()

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

@app.exception_handler(
    RequestValidationError
)
async def validation_exception_handler(
    request,
    exc
):

    return JSONResponse(
        status_code=422,
        content={
            "mensaje":
            "Datos inválidos",

            "errores":
            exc.errors()
        }
)
app = FastAPI(

    title="CRM Zimbra",

    version="1.0"

)

app.include_router(
    login_router
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