from app.database.conexion import conectar


def obtenerGraficas():

    conexion = conectar()

    cursor = conexion.cursor()

    # ==========================
    # PROPUESAS POR ESTADO
    # ==========================

    cursor.execute("""

        SELECT

        estado,

        COUNT(*) cantidad

        FROM Propuestas_Comerciales

        GROUP BY estado

    """)

    propuestas = cursor.fetchall()

    conexion.close()

    return {

        "propuestas": propuestas

    }