from fastapi import APIRouter, HTTPException

import pymysql

from app.models.schemas import Login

from app.auth import (

    verificar_password,

    crear_token,

    generar_hash

)

from app.database.conexion import conectar


router = APIRouter()


# ==================================================
# LOGIN
# ==================================================

@router.post("/login")

def login(

        datos: Login

):

    conn = conectar()

    cursor = conn.cursor(

        pymysql.cursors.DictCursor

    )


    cursor.execute(

        """

        SELECT *

        FROM Vendedores

        WHERE email=%s

        """,

        (

            datos.email,

        )

    )


    usuario = cursor.fetchone()


    # ==========================================
    # VALIDAR EXISTENCIA
    # ==========================================

    if not usuario:

        raise HTTPException(

            status_code=401,

            detail="Usuario no existe"

        )


    # ==========================================
    # PRIMER LOGIN
    # ==========================================

    if usuario["primerLogin"] == 1:


        # PASSWORD TEMPORAL
        if datos.password != usuario["password"]:

            raise HTTPException(

                status_code=401,

                detail="Contraseña temporal incorrecta"

            )


        token = crear_token(

            {

                "id":

                usuario["vendedorID"],


                "rol":

                usuario["rol"],


                "primerLogin":

                True

            }

        )


        return {

            "token":

            token,


            "rol":

            usuario["rol"],


            "primerLogin":

            True

        }


    # ==========================================
    # LOGIN NORMAL
    # ==========================================

    if not verificar_password(

            datos.password,

            usuario["password"]

    ):

        raise HTTPException(

            status_code=401,

            detail="Contraseña incorrecta"

        )


    token = crear_token(

        {

            "id":

            usuario["vendedorID"],


            "rol":

            usuario["rol"],


            "primerLogin":

            False

        }

    )


    return {

        "token":

        token,


        "rol":

        usuario["rol"],


        "primerLogin":

        False

    }


# ==================================================
# CAMBIAR PASSWORD
# ==================================================

@router.post("/cambiar-password")

def cambiar_password(

        datos: dict

):

    conn = conectar()

    cursor = conn.cursor()


    nueva_password = generar_hash(

        datos["password"]

    )


    cursor.execute(

        """

        UPDATE Vendedores

        SET

        password=%s,

        primerLogin=0

        WHERE vendedorID=%s

        """,

        (

            nueva_password,

            datos["id"]

        )

    )


    conn.commit()


    return {

        "mensaje":

        "Contraseña actualizada"

    }