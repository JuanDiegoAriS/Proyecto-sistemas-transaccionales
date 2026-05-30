from app.database.conexion import conectar


def obtenerPropuestas():

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute("""

        SELECT *

        FROM Propuestas_Comerciales

    """)


    datos = cursor.fetchall()


    conexion.close()


    return datos

def aprobarPropuesta(propuestaID):

    conexion = conectar()

    cursor = conexion.cursor()

    cursor.execute(

        """

        UPDATE Propuestas_Comerciales

        SET estado='Aprobada'

        WHERE propuestaID=%s

        """,

        (

            propuestaID,

        )

    )

    conexion.commit()

    conexion.close()

    return {

        "mensaje":"Propuesta aprobada"

    }


def rechazarPropuesta(propuestaID):

    conexion = conectar()

    cursor = conexion.cursor()

    cursor.execute(

        """

        UPDATE Propuestas_Comerciales

        SET estado='Rechazada'

        WHERE propuestaID=%s

        """,

        (

            propuestaID,

        )

    )

    conexion.commit()

    conexion.close()

    return {

        "mensaje":"Propuesta rechazada"

    }