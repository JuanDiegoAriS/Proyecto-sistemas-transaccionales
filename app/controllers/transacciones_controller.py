from app.database.conexion import conectar


def ejecutar(

sql,

params

):

    conexion=conectar()

    cursor=conexion.cursor()


    cursor.execute(

sql,

params

)


    conexion.commit()

    conexion.close()



def registrarProspecto(data):


    ejecutar(

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


    return {

"mensaje":

"Prospecto registrado"

}




def convertirProspecto(data):


    ejecutar(

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


    return {

"mensaje":

"Convertido"

}




def crearPropuesta(data):


    ejecutar(

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


    return {

"mensaje":

"Propuesta creada"

}




def aprobarPropuesta(data):


    ejecutar(

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


    return {

"mensaje":

"Venta aprobada"

}




def registrarInteraccion(data):


    ejecutar(

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


    return {

"mensaje":

"Interaccion registrada"

}