from fastapi import APIRouter

from app.controllers.ventas_controller import *


router=APIRouter()



@router.get("/ventas")

def ventas():

    return obtenerVentas()