from fastapi import APIRouter

from app.controllers.graficas_controller import obtenerGraficas


router = APIRouter()


@router.get("/graficas")
def graficas():

    return obtenerGraficas()