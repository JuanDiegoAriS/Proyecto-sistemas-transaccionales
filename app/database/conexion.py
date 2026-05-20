import pymysql


def conectar():

    conexion=pymysql.connect(

        host="localhost",

        user="root",

        password="",

        database="zimbra",

        cursorclass=pymysql.cursors.DictCursor

    )


    return conexion