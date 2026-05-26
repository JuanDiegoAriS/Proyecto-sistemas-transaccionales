import pymysql



def conectar():

    return pymysql.connect(

        host="localhost",

        user="root",

        password="tu_contraseña",

        database="zimbra",

        cursorclass=pymysql.cursors.DictCursor

    )