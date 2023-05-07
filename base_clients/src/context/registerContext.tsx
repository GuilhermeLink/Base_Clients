import { useState, createContext } from "react";
import api from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

interface iRegisterProviderProps {
  children: React.ReactNode;
  type?: string;
}

interface AlertProps {
  type?: string;
  message: string;
}

export interface iRegisterFormData{
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmPass?: string;
}

export const RegisterContext = createContext({})

const RegisterProvider = ( {children}: iRegisterProviderProps ) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [alert, setAlert] = useState<AlertProps | null>(null)
  
  
    const registerUser = async (data: iRegisterFormData) => {
      delete data.confirmPass 
      try {
        setLoading(true)
        console.log(data)
        const response = await api.post('/user', data)
    
        setAlert({
          type: 'success',
          message: response.data.message
        })
        toast.success('Cadastro realizado com sucesso', {
          position: 'top-right',
          autoClose: 2000
        })
        setTimeout(() => {
          setAlert(null)
          navigate('/login')
        }, 1000)
      } catch (error) {
        console.log(error)
        setAlert({
          type: 'error',
          message: 'Ops! Algo deu errado'
        })
        toast.error('Ops! Algo deu errado', {
          position: 'top-right',
          autoClose: 2000
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000)
      } finally {
        setLoading(false)
      }
    }


    return (
        <RegisterContext.Provider value={{registerUser, loading, alert, setAlert, setLoading}}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider