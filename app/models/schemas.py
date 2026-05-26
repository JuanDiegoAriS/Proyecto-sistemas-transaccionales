from pydantic import BaseModel



class Prospecto(

BaseModel

):

    clienteID:int

    vendedorID:int




class Conversion(

BaseModel

):

    prospectoID:int

    clienteID:int

    vendedorID:int




class Propuesta(

BaseModel

):

    clienteID:int

    vendedorID:int

    monto:float




class Aprobar(

BaseModel

):

    propuestaID:int

    clienteID:int

    vendedorID:int




class Interaccion(

BaseModel

):

    clienteID:int

    vendedorID:int

    nivel:str