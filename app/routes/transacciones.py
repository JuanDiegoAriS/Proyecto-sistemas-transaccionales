from fastapi import APIRouter

from models.schemas import *

from controllers.transacciones_controller import *


router=APIRouter()



@router.post(

"/registrarProspecto"

)

def registrar(

data:RegistrarProspecto

):


    return registrarProspecto(

        data.clienteID,

        data.vendedorID

    )





@router.post(

"/convertirProspecto"

)

def convertir(

data:ConvertirProspecto

):


    return convertirProspecto(

        data.prospectoID,

        data.clienteID,

        data.vendedorID

    )





@router.post(

"/crearPropuesta"

)

def propuesta(

data:CrearPropuesta

):


    return crearPropuesta(

        data.clienteID,

        data.vendedorID,

        data.monto

    )