from database.conexion import conectar




def registrarProspecto(

clienteID,

vendedorID

):


    conexion=conectar()

    cursor=conexion.cursor()



    cursor.execute(

"""

CALL RegistrarProspecto(

%s,

%s

)

""",

(clienteID,vendedorID)

)



    conexion.commit()


    conexion.close()


    return {

"mensaje":

"Prospecto registrado"

}