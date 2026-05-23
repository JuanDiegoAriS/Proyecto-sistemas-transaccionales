from database.conexion import conectar




def obtenerClientes():

    conexion=conectar()

    cursor=conexion.cursor()



    cursor.execute(

"""

SELECT *

FROM Clientes

"""

)


    datos=cursor.fetchall()


    conexion.close()


    return datos

def registrarCliente(

nombres,
apellidos,
email,
telefono,
empresa,
cargo

):


    conexion=conectar()

    cursor=conexion.cursor()



    cursor.execute(

"""

CALL RegistrarCliente(

%s,
%s,
%s,
%s,
%s,
%s

)

""",

(

nombres,
apellidos,
email,
telefono,
empresa,
cargo

)

)



    conexion.commit()

    conexion.close()



    return {

"mensaje":

"Cliente registrado"

}