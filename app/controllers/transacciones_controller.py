from app.database.conexion import conectar


def ejecutar(sql, params):

    conexion = conectar()

    cursor = conexion.cursor()

    try:

        cursor.execute(

            sql,

            params

        )

        conexion.commit()

        return {

            "mensaje":

            "Operacion exitosa"

        }

    except Exception as e:

        conexion.rollback()

        return {

            "error":

            str(e)

        }

    finally:

        conexion.close()



####################################
# REGISTRAR PROSPECTO
####################################

def registrarProspecto(data):

    return ejecutar(

        """

        CALL RegistrarProspecto(

            %s,

            %s

        )

        """,

        (

            data.clienteID,

            data.vendedorID

        )

    )



####################################
# CONVERTIR PROSPECTO
####################################

def convertirProspecto(data):

    return ejecutar(

        """

        CALL ConvertirProspecto(

            %s,

            %s,

            %s

        )

        """,

        (

            data.prospectoID,

            data.clienteID,

            data.vendedorID

        )

    )



####################################
# CREAR PROPUESTA
####################################

def crearPropuesta(data):

    return ejecutar(

        """

        CALL CrearPropuesta(

            %s,

            %s,

            %s

        )

        """,

        (

            data.clienteID,

            data.vendedorID,

            data.monto

        )

    )



####################################
# APROBAR PROPUESTA
####################################

def aprobarPropuesta(data):

    return ejecutar(

        """

        CALL AprobarPropuesta(

            %s,

            %s,

            %s

        )

        """,

        (

            data.propuestaID,

            data.clienteID,

            data.vendedorID

        )

    )



####################################
# REGISTRAR INTERACCION
####################################

def registrarInteraccion(data):

    return ejecutar(

        """

        CALL RegistrarInteraccion(

            %s,

            %s,

            %s

        )

        """,

        (

            data.clienteID,

            data.vendedorID,

            data.nivel

        )

    )