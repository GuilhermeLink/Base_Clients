import { createContext, useEffect, useState } from "react";

interface IAuthContextProps{
    userAuthenticated: boolean,
    currentUser: IUser | undefined
    loading: boolean
}
interface IAuthContextProviderProps{
    children: React.ReactNode
}
export interface IUser {
    id:          string;
    name:        string;
    email:       string;
    phone:       string;
}

export const AuthContext = createContext({} as IAuthContextProps)


export const AuthContextProvider = ({children}: IAuthContextProviderProps) =>{
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>()
    const [loading, setLoading] = useState<boolean>(true)
    const verifyAuthUser = () =>{
        const currentToken = localStorage.getItem('base-clients:token')
        const currentUser = localStorage.getItem('base-clients:current-user')
        if(currentToken && currentUser){
            setUserAuthenticated(true)
            setCurrentUser(JSON.parse(currentUser))
        }
    }
    useEffect(()=>{
        verifyAuthUser()
        setTimeout(()=>{
            setLoading(false)

        },2000)
    },[])
    return(
        <AuthContext.Provider value={{userAuthenticated, currentUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}