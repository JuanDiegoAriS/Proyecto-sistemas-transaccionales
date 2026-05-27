from fastapi import APIRouter

from app.controllers.metricas_controller import *


router = APIRouter()



##################################
# SCORE
##################################

@router.get(

"/score/{nivel}"

)

def obtenerScore(

nivel:str

):


    return score(

        nivel

    )




##################################
# COMISION
##################################

@router.get(

"/comision/{monto}"

)

def obtenerComision(

monto:float

):


    return comision(

        monto

    )




##################################
# CONVERSION
##################################

@router.get(

"/conversion/{convertidos}/{prospectos}"

)

def obtenerConversion(

convertidos:int,

prospectos:int

):


    return conversion(

        convertidos,

        prospectos

    )




##################################
# CUMPLIMIENTO
##################################

@router.get(

"/cumplimiento/{ventas}/{meta}"

)

def obtenerCumplimiento(

ventas:float,

meta:float

):


    return cumplimiento(

        ventas,

        meta

    )