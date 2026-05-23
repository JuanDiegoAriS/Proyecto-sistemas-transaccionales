from fastapi import APIRouter

from controllers.clientes_controller import obtenerClientes


router=APIRouter()



@router.get(

"/clientes"

)

def clientes():

    return obtenerClientes()

from fastapi import APIRouter

from models.schemas import Cliente

from controllers.clientes_controller import *


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