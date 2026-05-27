from fastapi import APIRouter

from app.models.schemas import *

from app.controllers.transacciones_controller import *


router=APIRouter()



@router.post("/registrarProspecto")

def registrar(

data: Prospecto

):

    return registrarProspecto(data)



@router.post("/convertirProspecto")

def convertir(

data: Conversion

):

    return convertirProspecto(data)



@router.post("/crearPropuesta")

def propuesta(

data: Propuesta

):

    return crearPropuesta(data)



@router.post("/aprobarPropuesta")

def aprobar(

data: Aprobar

):

    return aprobarPropuesta(data)



@router.post("/registrarInteraccion")

def interaccion(

data: Interaccion

):

    return registrarInteraccion(data)