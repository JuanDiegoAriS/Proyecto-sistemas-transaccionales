from fastapi import HTTPException


def admin():

    if user["rol"]!="admin":

        raise HTTPException(
            403
        )