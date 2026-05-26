from app.database.conexion import conectar



def obtenerProspectos():

    conexion=conectar()

    cursor=conexion.cursor()


    cursor.execute(

"""

SELECT *

FROM Prospectos

"""

)


    datos=cursor.fetchall()


    conexion.close()


    return datos