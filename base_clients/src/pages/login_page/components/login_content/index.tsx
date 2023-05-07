import React from 'react'
import { StyledLoginContent } from './style'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRequests } from '../../../../hooks/RequestsHooks'
import { FormDataLoginUser, schema } from '../../../../schemas/login_user_schema'

export default function LoginContent() {
  const { loginUserRequest } = useRequests()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataLoginUser>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const handleLogin = (data: FormDataLoginUser) => {
    console.log(data)
    loginUserRequest(data)
  }

  return (
    <StyledLoginContent>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          placeholder="Digite seu usuário"
          {...register('email', { required: true })}
        />
        {errors.email && <span>Por favor, informe seu usuário.</span>}

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register('password', { required: true })}
        />
        {errors.password && <span>Por favor, informe sua senha.</span>}

        <a href="#">Esqueci minha senha</a>

        <button className="submit_button" type="submit">
          Entrar
        </button>
        <p className="account_message">Ainda não possui conta?</p>
        <button
          className="register_button"
          type="button"
          onClick={() => navigate('/register')}
        >
          Cadastrar
        </button>
      </form>
    </StyledLoginContent>
  )
}
