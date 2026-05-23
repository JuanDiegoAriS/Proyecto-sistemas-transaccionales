from fastapi import APIRouter

from app.controllers.clientes_controller import obtenerClientes
from app.models.schemas import Cliente

from app.controllers.clientes_controller import *

router=APIRouter()



@router.get(

"/clientes"

)

def clientes():

    return obtenerClientes()


router=APIRouter()



@router.post(

"/registrarCliente"

)

def registrar(

cliente:Cliente

):


    return registrarCliente(

cliente.nombres,

cliente.apellidos,

cliente.email,

cliente.telefono,

cliente.empresa,

cliente.cargo

)