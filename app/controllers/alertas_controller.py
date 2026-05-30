from app.database.conexion import conectar


def obtenerAlertas():

    conexion = conectar()

    cursor = conexion.cursor()

    alertas = []

    contador = 1

    # =====================================
    # CLIENTES CON ALTO INTERES
    # =====================================

    cursor.execute("""

        SELECT

        clienteID,

        nivelInteres

        FROM Marketing_Interacciones

        WHERE nivelInteres='ALTO'

    """)

    resultados = cursor.fetchall()

    for fila in resultados:

        alertas.append({

            "alertaID": contador,

            "clienteID": fila["clienteID"],

            "mensaje": "Cliente con ALTO INTERÉS"

        })

        contador += 1

    # =====================================
    # PROPUESTAS PENDIENTES
    # =====================================

    cursor.execute("""

        SELECT

        propuestaID,

        clienteID

        FROM Propuestas_Comerciales

        WHERE estado='Pendiente'

    """)

    propuestas = cursor.fetchall()

    for propuesta in propuestas:

        alertas.append({

            "alertaID": contador,

            "clienteID": propuesta["clienteID"],

            "mensaje": f"Propuesta {propuesta['propuestaID']} pendiente de aprobación"

        })

        contador += 1



    # =====================================
# VENTAS RECIENTES
# =====================================

    cursor.execute("""

    SELECT

    ventaID,

    propuestaID

    FROM Ventas_Cerradas

    WHERE DATE(fechaVenta)=CURDATE()

""")

    ventas = cursor.fetchall()

    for venta in ventas:

        alertas.append({

        "alertaID": contador,

        "clienteID": "-",

        "mensaje":

        f"Nueva venta registrada (Venta {venta['ventaID']})"

    })

    contador += 1
    
    conexion.close()

    return alertas