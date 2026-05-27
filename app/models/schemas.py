from pydantic import BaseModel



class Cliente(BaseModel):

    nombres:str
    apellidos:str
    email:str
    telefono:str
    empresa:str
    cargo:str



class Prospecto(BaseModel):

    clienteID:int
    vendedorID:int



class Conversion(BaseModel):

    prospectoID:int
    clienteID:int
    vendedorID:int



class Propuesta(BaseModel):

    clienteID:int
    vendedorID:int
    monto:float



class Aprobar(BaseModel):

    propuestaID:int
    clienteID:int
    vendedorID:int



class Interaccion(BaseModel):

    clienteID:int
    vendedorID:int
    nivel:str