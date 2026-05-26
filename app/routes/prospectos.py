from fastapi import APIRouter

from app.controllers.prospectos_controller import *


router=APIRouter()



@router.get("/prospectos")

def prospectos():

    return obtenerProspectos()