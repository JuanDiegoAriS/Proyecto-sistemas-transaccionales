from app.database.conexion import conectar



def score(

nivel

):


    conexion=conectar()

    cursor=conexion.cursor()


    cursor.execute(

"""

SELECT

CalcularScore(

%s

)

AS score

""",

(nivel,)

)


    r=cursor.fetchone()


    conexion.close()


    return r