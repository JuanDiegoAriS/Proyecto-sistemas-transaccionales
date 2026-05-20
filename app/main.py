from fastapi import FastAPI


from routes.clientes import router as clientes

from routes.prospectos import router as prospectos

from routes.transacciones import router as transacciones



app=FastAPI(

title="API Zimbra",

description="Sistema transaccional",

version="1.0"

)



app.include_router(clientes)

app.include_router(prospectos)

app.include_router(transacciones)




@app.get("/")

def inicio():

    return {

"mensaje":

"API Zimbra"

}