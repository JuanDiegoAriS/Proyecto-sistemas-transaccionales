from fastapi import APIRouter

from app.controllers.alertas_controller import *


router=APIRouter()



@router.get("/alertas")

def alertas():

    return obtenerAlertas()