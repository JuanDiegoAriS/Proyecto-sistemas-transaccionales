from app.database.conexion import conectar


def obtenerClientes():

    conexion = conectar()

    cursor = conexion.cursor()

    cursor.execute("""

        SELECT *

        FROM Clientes

    """)

    datos = cursor.fetchall()

    conexion.close()

    return datos


def obtenerClientesDisponibles():

    conexion = conectar()

    cursor = conexion.cursor()

    cursor.execute("""

        SELECT *

        FROM Clientes c

        WHERE c.estadoCliente='Nuevo'

        AND NOT EXISTS(

            SELECT 1

            FROM Prospectos p

            WHERE p.clienteID = c.clienteID

        )

        ORDER BY c.clienteID

    """)

    datos = cursor.fetchall()

    conexion.close()

    return datos


def registrarCliente(data):

    conexion = conectar()

    cursor = conexion.cursor()

    try:

        cursor.execute("""

            INSERT INTO Clientes(

                nombres,
                apellidos,
                email,
                telefono,
                empresa,
                cargo,
                clientePago

            )

            VALUES(

                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                0

            )

        """,

        (

            data.nombres,
            data.apellidos,
            data.email,
            data.telefono,
            data.empresa,
            data.cargo

        ))

        conexion.commit()

        return {

            "mensaje":

            "Cliente registrado correctamente"

        }

    except Exception as e:

        conexion.rollback()

        return {

            "error":

            str(e)

        }

    finally:

        conexion.close()