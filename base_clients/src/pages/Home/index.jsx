import { useState } from 'react'
import { HomePage, Main, Modal } from './styles'
import imgLogo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/loginContext'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';


const schema = yup.object({
  title: yup
  .string()
  .required('É obrigatório alguma tecnologia'),

  status: yup
  .string()
  .required('Escolha de nível é obrigatória')
})

const Home = () => {

  const { user } = useContext(AuthContext)
  const [modal, setModal] = useState(false)

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModal(false)
  }

  const cleanToken = () => {
    localStorage.removeItem('@usertoken:token')
  }

  const typeNivel = [
    'Iniciante',
    'Intermediário',
    'Avançado',
  ]

  return (
    <div>
      <HomePage>
        <h1>
          <img src={imgLogo} alt='logo' />
        </h1>
        <Link to='/login' onClick={cleanToken}>Sair</Link>
      </HomePage>
      <Main>
        <section>
          <div>
            <h2>Olá, <span>{user.name}</span></h2>
            <span>{user.course_module}</span>
          </div>
        </section>
        
        <div className='home'>
          <div>
            <h3>Tecnologias</h3>
            <button onClick={() => setModal(true)}>+</button>
            {modal ? 
            
              <Modal modal={modal} className='modalScreen'>
                <section className='modalCard'>

                  <header>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={closeModal}>x</button>
                  </header>

                  <form>
                      
                    <label htmlFor="tech">Nome</label>
                    <input id='tech' type='text' placeholder='Digite uma tecnologia' {...register('title')}/>
                    <span>{errors.tech?.message}</span>

                    <label htmlFor="nivel">Selecionar status</label>
                    <select id="nivel" {...register('status')}>
                      {typeNivel.map((nivel,index) => (
                        <option key={index} value={nivel}>{nivel}</option>
                      ))}
                    </select>
                    <span>{errors.tech_nivel?.message}</span>

                    <button type='submit'>Cadastrar Tecnologia</button>
                  </form>

                </section>
              </Modal>
            :
            null  
            }
          </div>
        </div>
                  
      </Main>
    </div>
  )
}

export default Home