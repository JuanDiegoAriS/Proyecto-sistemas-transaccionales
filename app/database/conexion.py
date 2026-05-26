import pymysql


def conectar():

    return pymysql.connect(

        host="localhost",

        user="root",

        password="",

        database="zimbra",

        cursorclass=pymysql.cursors.DictCursor

    )