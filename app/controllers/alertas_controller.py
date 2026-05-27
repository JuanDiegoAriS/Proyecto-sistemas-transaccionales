from app.database.conexion import conectar


def obtenerAlertas():

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute("""

        SELECT *

        FROM Reportes_Alertas

    """)


    datos = cursor.fetchall()


    conexion.close()


    return datos