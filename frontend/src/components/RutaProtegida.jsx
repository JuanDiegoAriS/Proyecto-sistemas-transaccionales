import { Navigate } from "react-router-dom";

export default function RutaProtegida({

    children,

    rolesPermitidos = []

}){

    const token = localStorage.getItem(
        "token"
    );

    const rol = localStorage.getItem(
        "rol"
    );

    if(!token){

        return <Navigate to="/" />;

    }

    if(

        rolesPermitidos.length > 0 &&

        !rolesPermitidos.includes(
            rol
        )

    ){

        return <Navigate
            to="/dashboard"
        />;

    }

    return children;

}