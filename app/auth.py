import bcrypt

from jose import jwt

from datetime import datetime,timedelta


SECRET_KEY = "zimbra"

ALGORITHM = "HS256"


def generar_hash(password):

    return bcrypt.hashpw(

        password.encode("utf-8"),

        bcrypt.gensalt()

    ).decode("utf-8")


def verificar_password(

        password,

        hash_password

):

    if not hash_password:

        return False


    return bcrypt.checkpw(

        password.encode("utf-8"),

        hash_password.encode("utf-8")

    )


def crear_token(datos):

    expire = datetime.utcnow() + timedelta(
        hours=8
    )

    datos.update({

        "exp": expire

    })


    return jwt.encode(

        datos,

        SECRET_KEY,

        algorithm=ALGORITHM

    )