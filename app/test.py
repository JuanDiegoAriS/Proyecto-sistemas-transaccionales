import pymysql


try:

    conexion = pymysql.connect(

        host="127.0.0.1",

        port=3306,

        user="root",

        password="1234",

        database="zimbra"

    )

    print(

        "Conectado"

    )

except Exception as e:

    print(

        e

    )