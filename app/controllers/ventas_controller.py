from app.database.conexion import conectar


def obtenerVentas():

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute("""

    SELECT

    v.ventaID,

    v.propuestaID,

    p.monto,

    p.estado,

    v.fechaVenta

    FROM Ventas_Cerradas v

    INNER JOIN Propuestas_Comerciales p

    ON v.propuestaID = p.propuestaID

    ORDER BY v.ventaID DESC

    """)


    datos = cursor.fetchall()


    conexion.close()


    return datos