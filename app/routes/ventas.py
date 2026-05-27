from fastapi import APIRouter

from app.controllers.ventas_controller import obtenerVentas


router = APIRouter()



@router.get(

"/ventas"

)

def ventas():

    return obtenerVentas()