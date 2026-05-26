from fastapi import APIRouter

from app.controllers.metricas_controller import *


router=APIRouter()



@router.get(

"/score/{nivel}"

)

def obtener(

nivel:str

):


    return score(

nivel

)