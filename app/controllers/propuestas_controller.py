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