from app.database.conexion import conectar


def obtenerVentas():

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute("""

        SELECT *

        FROM Ventas_Cerradas

    """)


    datos = cursor.fetchall()


    conexion.close()


    return datos