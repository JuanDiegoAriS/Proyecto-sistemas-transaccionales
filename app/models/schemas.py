from pydantic import BaseModel



class Cliente(BaseModel):

    nombres:str
    apellidos:str
    email:str
    telefono:str
    empresa:str
    cargo:str



from pydantic import BaseModel, Field

class Prospecto(BaseModel):
    clienteID: int = Field(..., gt=0)
    vendedorID: int = Field(..., gt=0)



class Conversion(BaseModel):

    prospectoID:int
    clienteID:int
    vendedorID:int



class Propuesta(BaseModel):
    clienteID: int
    vendedorID: int
    monto: float = Field(..., gt=0)



class Aprobar(BaseModel):

    propuestaID:int
    clienteID:int
    vendedorID:int



class Interaccion(BaseModel):

    clienteID:int
    vendedorID:int
    nivel:str