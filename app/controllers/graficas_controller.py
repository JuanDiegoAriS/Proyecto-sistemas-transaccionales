from app.database.conexion import conectar


def obtenerGraficas():

    conexion = conectar()

    cursor = conexion.cursor()

    # =====================================
    # PROPUESTAS POR ESTADO
    # =====================================

    cursor.execute("""

        SELECT

        COALESCE(estado,'Pendiente') estado,

        COUNT(*) cantidad

        FROM Propuestas_Comerciales

        GROUP BY estado

    """)

    propuestas = cursor.fetchall()

    # =====================================
    # VENTAS POR MES
    # =====================================

    cursor.execute("""

        SELECT

        MONTH(fechaVenta) mes,

        COUNT(*) cantidad

        FROM Ventas_Cerradas

        GROUP BY MONTH(fechaVenta)

        ORDER BY MONTH(fechaVenta)

    """)

    ventas = cursor.fetchall()

    conexion.close()

    return {

        "propuestas": propuestas,

        "ventas": ventas

    }