from fastapi import APIRouter

from app.controllers.interacciones_controller import obtenerInteracciones


router = APIRouter()



@router.get(

"/interacciones"

)

def interacciones():

    return obtenerInteracciones()