import {LoginPage, LoginHeader} from './styles'
import imgLogo from '../../assets/Logo.png'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react'
import { AuthContext } from '../../context/loginContext'


const schema = yup.object({
    email: yup
    .string()
    .email('Favor digitar um e-mail válido')
    .required('O email é obrigatório'),

    password: yup
    .string()
    .min(8, 'Favor colocar no mínimo 8 caracteres')
    .required('A senha é obrigatória')
})


const Login = () => {

    const { loginUser, loading } = useContext(AuthContext)

    const [eye, setEye] = useState(true)

    const changeStateEye = () => {
        if(eye === true) {
            setEye(false)
        } else {
            setEye(true)
        }
      } 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

    return (
        <div>
            <LoginHeader>
                <h1>
                    <img src={imgLogo} alt='logo' />
                </h1>
            </LoginHeader>
            <LoginPage>
                <form onSubmit={handleSubmit(loginUser)}>
                    <h2>Login</h2>
                    <section>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' placeholder='Digite aqui seu email...' {...register('email')}/>
                        <span>{errors.email?.message}</span>

                        <label htmlFor='password'>Senha</label>
                        <div>
                            {
                                eye ?                   
                                <input id='password' type='password' placeholder='Digite aqui sua senha...' {...register('password')}/>
                                :
                                <input id='password' type='text' placeholder='Digite aqui sua senha...' {...register('password')}/>
                                
                            }
                            <FaEye onClick={changeStateEye}/>
                        </div>
                            <span>{errors.password?.message}</span>
                        <button type='submit' disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
                        <p>Ainda não possui uma conta?</p>
                        <Link to='/register'>Cadastre-se</Link>
                    </section>
                </form>
            </LoginPage>
        </div>
    )
}

export default Login