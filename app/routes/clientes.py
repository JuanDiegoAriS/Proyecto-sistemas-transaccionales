from fastapi import APIRouter
from pydantic import BaseModel

from app.controllers.clientes_controller import *


router = APIRouter()


class Cliente(BaseModel):

    nombres: str

    apellidos: str

    email: str

    telefono: str

    empresa: str

    cargo: str


@router.get("/clientes")
def clientes():

    return obtenerClientes()

@router.get("/clientes-disponibles")
def clientesDisponibles():

    return obtenerClientesDisponibles()

@router.post("/clientes")
def crearCliente(data: Cliente):

    return registrarCliente(data)