from app import routes
from app.auth import crear_token
from schemas import Login


@routes.post("/login")

def login(datos:Login):

    cursor.callproc(
        "Login",
        [datos.email]
    )

    usuario=...

    token=crear_token({

        "id":
        usuario["vendedorID"],

        "rol":
        usuario["rol"]

    })


    return {

        "token":
        token,

        "rol":
        usuario["rol"]

    }