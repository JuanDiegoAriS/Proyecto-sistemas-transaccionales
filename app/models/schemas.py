from pydantic import BaseModel



class RegistrarProspecto(BaseModel):

    clienteID:int

    vendedorID:int




class ConvertirProspecto(BaseModel):

    prospectoID:int

    clienteID:int

    vendedorID:int




class CrearPropuesta(BaseModel):

    clienteID:int

    vendedorID:int

    monto:float




class AprobarPropuesta(BaseModel):

    propuestaID:int

    clienteID:int

    vendedorID:int

    from pydantic import BaseModel


class Cliente(BaseModel):

    nombres:str
    apellidos:str
    email:str
    telefono:str
    empresa:str
    cargo:str