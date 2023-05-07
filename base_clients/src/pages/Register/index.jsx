import {RegisterPage, RegisterHeader, BackPage} from './styles'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { RegisterContext } from '../../context/registerContext';
import background from '../../assets/background.png';


const schema = yup.object({
  name: yup
  .string()
  .required('Nome obrigatório'),

  email: yup
  .string()
  .email('Favor digitar um email válido')
  .required('Email é obrigatório'),

  phone: yup
  .string()
  .required("O campo é obrigatório"),

  password: yup
  .string()
  .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
  .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
  .matches(/(\d)/, 'Deve conter ao menos um número')
  .matches(/(\W)|_/, 'Deve conter um caracter especial')
  .min(8, 'Favor colocar no mínimo 8 caracteres')
  .required('A senha é obrigatória')
})


const Register = () => {

  const { registerUser, loading } = useContext(RegisterContext)

  const { register, handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <BackPage>
        <img className='backlogo' src={background} alt="back" />
      </BackPage> 
      <RegisterHeader>
        <header>
          <h1 className='logo'>
          <span className='logo'>Base Clients</span>
          </h1>
          <Link to='/login'>Voltar</Link>
        </header>
      </RegisterHeader>
      <RegisterPage>
          <form onSubmit={handleSubmit(registerUser)}>
            <h2>Crie sua conta:</h2>

            <label htmlFor='name'>Nome:</label>
            <input type='text' placeholder='Digite aqui seu nome' {...register('name')}/>
            <span>{errors.name?.message}</span>

            <label htmlFor='email'>Email:</label>
            <input type='email' placeholder='Digite aqui seu email' {...register('email')}/>
            <span>{errors.email?.message}</span>

            <label htmlFor='phone'>Telefone:</label>
            <input type='phone' placeholder='Telefone' {...register('phone')}/>
            <span>{errors.phone?.message}</span>

            <label htmlFor='password'>Senha:</label>
            <input type='password' placeholder='Digite aqui sua senha' {...register('password')}/>
            <span>{errors.password?.message}</span>
                    
            <button type='submit' disabled={loading}>{loading === true ? 'Cadastrando...' : 'Cadastrar'}</button>
          </form>
      </RegisterPage>
    </div>
    )
}

export default Register