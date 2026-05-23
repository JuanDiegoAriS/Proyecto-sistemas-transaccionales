from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse


# importar rutas API
from app.routes.clientes import router as clientes
from app.routes.transacciones import router as transacciones


app = FastAPI(

    title="API Zimbra",

    description="Sistema transaccional",

    version="1.0"

)


# carpeta templates
templates = Jinja2Templates(

    directory="app/templates"

)


# incluir endpoints API
app.include_router(clientes)

app.include_router(transacciones)



##################################
# Página inicio
##################################

@app.get(

"/",

response_class=HTMLResponse

)

def inicio(

request: Request

):

    return templates.TemplateResponse(

        "index.html",

        {

            "request": request

        }

    )



##################################
# Formulario registrar cliente
##################################

@app.get(

"/cliente",

response_class=HTMLResponse

)

def cliente(

request: Request

):

    return templates.TemplateResponse(

        "registrar_cliente.html",

        {

            "request": request

        }

    )




##################################
# Formulario propuesta
##################################

@app.get(

"/propuesta",

response_class=HTMLResponse

)

def propuesta(

request: Request

):

    return templates.TemplateResponse(

        "crear_propuesta.html",

        {

            "request": request

        }

    )