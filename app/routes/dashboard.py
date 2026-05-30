from fastapi import APIRouter

from app.controllers.dashboard_controller import obtenerMetricas


router = APIRouter()


@router.get("/dashboard")

def dashboard():

    return obtenerMetricas()