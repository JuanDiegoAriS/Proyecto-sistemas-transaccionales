from app.database.conexion import conectar



def obtenerInteracciones():

    conexion=conectar()

    cursor=conexion.cursor()


    cursor.execute(

"""

SELECT *

FROM Marketing_Interacciones

"""

)


    datos=cursor.fetchall()


    conexion.close()


    return datos