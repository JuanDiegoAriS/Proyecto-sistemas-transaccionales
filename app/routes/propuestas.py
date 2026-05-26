from fastapi import APIRouter

from app.controllers.propuestas_controller import obtenerPropuestas


router = APIRouter()



@router.get(

"/propuestas"

)

def propuestas():

    return obtenerPropuestas()