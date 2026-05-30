from fastapi import APIRouter

from app.database.conexion import conectar


router = APIRouter()


@router.get("/vendedores")
def listar_vendedores():

    conn = conectar()

    cursor = conn.cursor()

    cursor.execute(

        """

        SELECT

        vendedorID,

        nombres,

        apellidos,

        rol

        FROM Vendedores

        ORDER BY nombres

        """

    )

    vendedores = cursor.fetchall()

    conn.close()

    return vendedores