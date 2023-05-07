import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { Container } from "../container"



export const ProtectedRoutes = () => {
    const { loading, userAuthenticated } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <Container>
                <h1>Carregando...</h1>
            </Container>
        )
    }
    return userAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to='/' replace state={{ from: location }} />
    )
}