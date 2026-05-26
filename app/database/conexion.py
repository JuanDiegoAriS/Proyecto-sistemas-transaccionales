import pymysql



def conectar():

    return pymysql.connect(

        host="localhost",

        port=3306,

        user="root",

        password="1234",

        database="zimbra",

        cursorclass=pymysql.cursors.DictCursor

    )