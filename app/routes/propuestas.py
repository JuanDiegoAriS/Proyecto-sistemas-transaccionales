from fastapi import APIRouter

from app.controllers.propuestas_controller import (

    obtenerPropuestas,

    aprobarPropuesta,

    rechazarPropuesta

)


router = APIRouter()



@router.get(

"/propuestas"

)

def propuestas():

    return obtenerPropuestas()

@router.post(

"/aprobarPropuesta/{propuestaID}"

)

def aprobar(

        propuestaID:int

):

    return aprobarPropuesta(

        propuestaID

    )


@router.post(

"/rechazarPropuesta/{propuestaID}"

)

def rechazar(

        propuestaID:int

):

    return rechazarPropuesta(

        propuestaID

    )