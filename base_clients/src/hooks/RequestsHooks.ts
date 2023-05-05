import { AxiosError } from "axios"
import { FormDataRegisterUser } from "../schemas/register_user_schema"
import { api } from "../service/http"
import { FormDataLoginUser } from "../schemas/login_user_schema"


interface IUserRegisterRequest{

}

export const useRequests = () => {
    const registerUserRequest = async (payload: FormDataRegisterUser) => {
        try {
            const response = await api.post('/user', payload)
            console.log(response)
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        } 
    }
    const loginUserRequest = async (payload: FormDataLoginUser) =>{
        try {
            const response = await api.post('/login', payload)
            console.log(response)
            localStorage.setItem('base-clients:token', response.data.token.token)
            localStorage.setItem('base-clients:current-user', JSON.stringify(response.data.token.user))
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        }
    }
    return{
        registerUserRequest,
        loginUserRequest
    }

}

