from app.database.conexion import conectar


##################################
# SCORE
##################################

def score(nivel):

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute(

        """

        SELECT

        CalcularScore(%s)

        AS score

        """,

        (nivel,)

    )


    resultado = cursor.fetchone()


    conexion.close()


    return resultado



##################################
# COMISION
##################################

def comision(monto):

    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute(

        """

        SELECT

        CalcularComision(%s)

        AS comision

        """,

        (monto,)

    )


    resultado = cursor.fetchone()


    conexion.close()


    return resultado



##################################
# CONVERSION
##################################

def conversion(

    convertidos,

    prospectos

):


    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute(

        """

        SELECT

        TasaConversion(

            %s,

            %s

        )

        AS conversion

        """,

        (

            convertidos,

            prospectos

        )

    )


    resultado = cursor.fetchone()


    conexion.close()


    return resultado



##################################
# CUMPLIMIENTO
##################################

def cumplimiento(

    ventas,

    meta

):


    conexion = conectar()

    cursor = conexion.cursor()


    cursor.execute(

        """

        SELECT

        Cumplimiento(

            %s,

            %s

        )

        AS cumplimiento

        """,

        (

            ventas,

            meta

        )

    )


    resultado = cursor.fetchone()


    conexion.close()


    return resultado