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