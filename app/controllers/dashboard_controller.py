from app.database.conexion import conectar


def obtenerMetricas():

    conexion = conectar()

    cursor = conexion.cursor()

    cursor.execute(
        "SELECT COUNT(*) total FROM Clientes"
    )

    clientes = cursor.fetchone()["total"]


    cursor.execute(
        "SELECT COUNT(*) total FROM Prospectos"
    )

    prospectos = cursor.fetchone()["total"]


    cursor.execute(
        "SELECT COUNT(*) total FROM Propuestas_Comerciales"
    )

    propuestas = cursor.fetchone()["total"]


    cursor.execute(
        "SELECT COUNT(*) total FROM Ventas_Cerradas"
    )

    ventas = cursor.fetchone()["total"]


    cursor.execute(
        """

        SELECT

        IFNULL(SUM(monto),0)

        total

        FROM Propuestas_Comerciales

        WHERE estado='Aprobada'

        """

    )

    ingresos = cursor.fetchone()["total"]


    conexion.close()


    return {

        "clientes": clientes,

        "prospectos": prospectos,

        "propuestas": propuestas,

        "ventas": ventas,

        "ingresos": ingresos

    }