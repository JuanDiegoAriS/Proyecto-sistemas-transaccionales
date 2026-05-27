from fastapi import APIRouter

from app.controllers.clientes_controller import obtenerClientes


router = APIRouter()



@router.get(

"/clientes"

)

def clientes():

    return obtenerClientes()